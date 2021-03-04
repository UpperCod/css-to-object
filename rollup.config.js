import pkg from "./package.json";

export default {
    input: ["./css-to-object.js"],
    output: [
        {
            file: "css-to-object.cjs",
            format: "cjs",
            sourcemap: true,
        },
    ],
};
