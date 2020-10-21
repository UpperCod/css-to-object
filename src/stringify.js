/**
 *
 * @param {import("./compile").Rule[]} blocks
 * @param {string} parent
 * @param {string[]} rules
 */
function stringify(blocks, parent = ":host", rules = []) {
    return blocks.reduce((rules, { selector, children, content }) => {
        if (selector[0] == "@") {
            const [, type, value] = selector.match(/@([^\s]+)\s*(.*)/);
            if (type == "keyframes") {
                /**
                 * @type {string[]}
                 */
                const childRules = [];
                stringify(children, "", childRules);
                rules.push(`@${type} ${value}{${childRules.join("")}}`);
            } else {
                /**
                 * @type {string[]}
                 */
                const childRules = [];
                stringify(children, parent, childRules);
                rules.push(`@${type} ${value}{${childRules.join("")}}`);
            }
        } else {
            /**
             * @type {string[]}
             */
            const childRules = [];
            const mapSelector = selector.split(/\s*,\s*/).map((selector) => {
                selector =
                    selector == ":host"
                        ? selector
                        : parent + selector.slice(selector[0] == "&" ? 1 : 0);
                stringify(children, selector, childRules);
                return selector;
            });
            if (content) rules.push(`${mapSelector}{${content}}`);
            rules.push(...childRules);
        }
        return rules;
    }, rules);
}
