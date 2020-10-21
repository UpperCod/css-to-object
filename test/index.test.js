import test from "ava";
import { compile } from "../src/compile";

test("Simple", async (t) => {
    t.deepEqual(compile(`a{width:200px}`), [
        {
            selector: "a",
            content: "width:200px",
            start: 0,
            end: 14,
            children: [],
        },
    ]);
    t.deepEqual(compile(`a{width:200px}`), [
        {
            selector: "a",
            content: "width:200px",
            start: 0,
            end: 14,
            children: [],
        },
    ]);
});
