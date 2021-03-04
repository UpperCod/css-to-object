import test from "ava";
import { readFile } from "fs/promises";
import { cssToObject } from "../src/css-to-object.js";
/**
 *
 * @param {string} file
 */
const load = (file) =>
    readFile(new URL(`./css/${file}.css`, import.meta.url), "utf8");

["basic", "nested", "normalize"].forEach(async (type) =>
    test(type, async (t) => {
        const cssJson = await load(type);
        const { default: expect } = await import(`./expect/${type}.js`);
        t.deepEqual(cssToObject(cssJson), expect);
    })
);
