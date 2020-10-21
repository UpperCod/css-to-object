import test from "ava";
import { join } from "path";
import { readFile } from "fs/promises";
import { cssToJson } from "../css-to-object";
const load = (file) => readFile(join(__dirname, `./css/${file}.css`), "utf8");

["basic", "nexted", "normalize"].forEach(async (file) =>
    test(file, async (t) => {
        const cssJson = await load("basic");
        const { default: expect } = await import("./expect/basic");
        t.deepEqual(cssToJson(cssJson), expect);
    })
);
