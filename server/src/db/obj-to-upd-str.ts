import { NumberOrStringValsObj } from "./obj-to-field-vals";


/**
 * Returns the object key / value pairs of the given object as a string 
 * seperated by commas (suitable for a SQL update statement), e.g., 
 * say `v1`, `v2`, `v3` === `3`, `'a'`, `6` respectively then:
 * ```
 * { a: v1, b: v2, c: v3 } // => "a = 3, b = 'a', c = 6"
 * ```
 * 
 * @param o 
 */
function objToUpdStr(o: NumberOrStringValsObj): string {
    const keys = Object.keys(o);
    const vals = Object.values(o);
    let str = '';
    let appender = '';
    for (let i=0; i<vals.length; i++) {
        const key = keys[i];
        const val = vals[i];

        str += appender;
        if (typeof val === 'string') {
            str += key + ` = '${val}'`;
        } else {
            str += `${key} = ${val}`;
        }

        appender = ', ';
    }

    return str;
}


export { objToUpdStr }
