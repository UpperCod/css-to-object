export default {
    ":host": {
        ".button ": {
            "&:hover ": { background: "teal" },
            "&:active ": {
                background: "black",
                "@media (max-width: 200px) ": {
                    "&:not(button) ": { "max-width": "200px" },
                },
            },
        },
    },
};
