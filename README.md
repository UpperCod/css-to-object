# @uppercod/css-blocks

working... I have generated a relatively small code (200b) for the generation of a friendly AST

The code is based on regular expressions and is not strict in detecting syntax errors. It is designed for the construction of CSS-in-JS libraries

```css
:host {
    width: 200px;
    height: 200px;
    animation: host_rotate;
    button {
        width: 200px;
        height: 200px;
    }
}

@keyframes host_rotate {
    0% {
        width: 200px;
    }
    10% {
        width: 200px;
    }
}

@media (max-width: 320px) {
    .button {
        width: 100px;
    }
}
```

```json
[
    {
        "selector": ":host",
        "content": "width: 200px;\n    height: 200px;\n    animation: host_rotate;",
        "start": 0,
        "end": 138,
        "children": [
            {
                "selector": "button",
                "content": "width: 200px;\n        height: 200px;",
                "start": 72,
                "end": 136,
                "children": []
            }
        ]
    },
    {
        "selector": "@keyframes host_rotate",
        "content": "",
        "start": 138,
        "end": 241,
        "children": [
            {
                "selector": "0%",
                "content": "width: 200px;",
                "start": 164,
                "end": 201,
                "children": []
            },
            {
                "selector": "10%",
                "content": "width: 200px;",
                "start": 201,
                "end": 239,
                "children": []
            }
        ]
    },
    {
        "selector": "@media (max-width: 320px)",
        "content": "",
        "start": 241,
        "end": 314,
        "children": [
            {
                "selector": ".button",
                "content": "width: 100px;",
                "start": 270,
                "end": 312,
                "children": []
            }
        ]
    }
]
```
