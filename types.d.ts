interface CSSObjectFill {
    [prop: string]: CSSObjectFill | string | number;
}

interface Host {
    ":host": CSSObjectFill;
}

declare module "@uppercod/css-to-object" {
    export function cssToObject(css: string): Host;
}
