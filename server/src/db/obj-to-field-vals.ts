
type NumberOrStringValsObj = { [key:string] : number | string; }


/**
 * Returns the values of the given object as a string seperated by commas, 
 * e.g., say `v1 === 3, v2 === "a", v3 === 6`, then:
 * ```
 * { a: v1, b: v2, c: v3 } // => "3, 'a', 6"
 * ```
 * 
 * @param o 
 */
function objToFieldVals(o: NumberOrStringValsObj): string {
    let vals = Object.values(o);
    let str = '';
    let appender = '';
    for (let val of vals) {
        str += appender;
        if (typeof val === 'string') {
            str += `'${val}'`;
        } else {
            str += val;
        }

        appender = ', ';
    }

    return str;
}


export { objToFieldVals, NumberOrStringValsObj }
