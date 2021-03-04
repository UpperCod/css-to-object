/**
 *
 * @param {string} content
 */
const props = (content) =>
    content.replace(
        /\s*([^:]+)\s*:\s*([^;]+)(;){0,1}/g,
        (all, prop, value) => `"${prop}":"${encode(value)}",`
    );
/**
 *
 * @param {string} content
 */
const encode = (content) => content.replace(/"/g, '\\"');
/**
 *
 * @param {string} selector
 * @param {string[]} content
 */
const rule = (selector, content) => `${selector}{${content.join(";")}}`;

/**
 *
 * @param {string} style
 */
export function cssToObject(style) {
    const items = [];
    let test;
    while ((test = style.match(/(\<\d+){0,1}\s*([^};]+)\{([^{}]+)\}/))) {
        const [all, mark, selector, content] = test;
        style = style.replace(
            all,
            `<${items.push([encode(selector), props(content), mark]) - 1}`
        );
    }
    style = props(style);
    while ((test = style.match(/<(\d+)/))) {
        const [mark, id] = test;
        const [selector, content, beforeMark = ""] = items[id];
        style = style.replace(mark, `${beforeMark}"${selector}":{${content}},`);
    }

    style = `{${style}}`
        .replace(/\n+/g, "")
        .replace(/,\s*}/g, "}")
        .replace(/,$/, "");

    return JSON.parse(style);
}
