export interface CSSObjectFill {
    [prop: string]: CSSObjectFill | string | number;
}

export interface Host extends CSSObjectFill {
    ":host": CSSObjectFill;
}
export function cssToObject(css: string): Host;
