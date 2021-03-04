/**
 *
 * @param {string} css
 */
export function cssToObject(css) {
    css = replace(
        `:host{${css}}`,
        /**
         * Clean line breaks and normalize spaces
         */
        [/\s+/g, " "],
        /**
         * delete comments
         */
        [/\/\*.+?\*\//g, ""],
        /**
         * Replace double characters with single characters
         */
        [/\"/g, `'`],
        /**
         * Add ";" in case of css compression
         * @example
         * color: black} >> color: black;}
         */
        [/:([^;}]+)}/g, `:$1;}`],
        /**
         * uncomment to add import support
         * [/(@import +[^;]+);/g,`$1{}`],
         */
        /**
         * Capture the selectors and generate an index block for the JSON
         * @example
         * .selector{} >> ".selector":{}
         */
        [/ *([^;{}]+) *{/g, `"$1":{`],
        /**
         * Capture the css blocks "{}", to transform the css props into json props
         * @example
         * {width:200px;} >> {"width":"200px"}
         */
        [/{[^{}]+}/g, props],
        /**
         * Capture the first excludi block when using nested, to transform css props into json props
         * @example
         * {width:200px;&:hover{color:red;}} >> {"width":"200px"}
         */
        [/{([^"]+)/g, props],
        /**
         * Fix the union of props
         */
        [/}"/g, `},"`],
        /**
         * Fix props separation
         */
        [/, *}/g, `}`]
    );
    return JSON.parse(`{${css}}`);
}

/**
 * formats properties as JSON
 * @param {string} block
 */
const props = (block) => block.replace(/([\w-]+) *: *([^;]+);/g, `"$1":"$2",`);

/**
 * execute multiple replace on a string based on the given arguments
 * @param {string} str
 * @param {any[]} args
 */
const replace = (str, ...args) =>
    args.reduce((str, args) => str.replace(...args), str);
