const cssBlock = /([^}{;]*){([^}{]+)}/;
/**
 *
 * @param {Rule[]} list
 * @returns {(rule:Rule)=>""}
 */
const add = (list) => (rule) => list.push(rule) && "";
/**
 *
 * @param {string} css
 */
export function compile(css) {
    /**
     * @type {Rule[]}
     */
    let blocks = [];
    /**
     * @type {RegExpMatchArray}
     */
    let current;
    while ((current = css.match(cssBlock))) {
        const [fragment, selector, content] = current;
        const [spaces] = selector.match(/^ */);
        const { index: start } = current;
        const { length } = fragment;
        const end = fragment.length + start;
        const children = [];
        /**
         * @type {Rule}
         */
        const block = {
            selector: selector.trim(),
            content: content.trim(),
            start: start + spaces.length,
            end,
            children,
        };
        blocks = blocks.reduce((blocks, b) => {
            (block.start < b.start && b.end < block.end
                ? children
                : blocks
            ).push(b);
            return blocks;
        }, []);
        block.children = children;
        blocks.push(block);
        css = css.slice(0, start) + " ".repeat(length) + css.slice(end);
    }
    return blocks;
}

/**
 * @typedef {Object} Rule
 * @property {string} selector
 * @property {string} content
 * @property {number} start
 * @property {number} end
 * @property {Rule[]} children
 */
