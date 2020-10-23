declare module "@uppercod/css-to-object" {
    export interface CSSObjectFill {
        [prop: string]: CSSObjectFill | string | number;
    }

    export interface Host {
        ":host": CSSObjectFill;
    }
    export function cssToObject(css: string): Host;
}
