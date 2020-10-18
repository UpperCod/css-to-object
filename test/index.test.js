import test from "ava";
import { example } from "../src";

test("simple replace", async (t) => {
    t.is(example("a"), "a");
});
