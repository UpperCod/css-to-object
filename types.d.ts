declare module "@uppercod/css-to-object" {
    export interface CSSObjectFill {
        [prop: string]: CSSObjectFill | string | number;
    }

    export interface Host extends CSSObjectFill {
        ":host": CSSObjectFill;
    }
    export function cssToJson(css: string): Host;
}
