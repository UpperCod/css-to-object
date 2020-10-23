# css-to-object

css-to-object is a package that transforms the syntax from css to JSON format using regular expressions

The result is an object that shows properties, selectors and nests, example:

## input css

```css
.a {
    width: 200px;
    .b {
        font-size: 100px;
        &:hover {
            background: teal;
        }
    }
}

@media (max-width: 200px) {
    .b {
        font-size: 100px;
    }
}
```

## output css

```json
{
    ":host": {
        ".a ": {
            "width": "200px",
            ".b ": {
                "font-size": "100px",
                "&:hover ": { "background": "teal" }
            }
        },
        "@media (max-width: 200px) ": { ".b ": { "font-size": "100px" } }
    }
}
```

> **Note** that the output is encapsulated in a `:host` selector.
