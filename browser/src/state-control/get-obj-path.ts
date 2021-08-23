
/**
 * Returns the path to the given value within the given 
 * object (when seen as a tree).
 * 
 * @param o the object within to search
 * @param v the value to search for
 * 
 * @example
 * ```
 * let v = { c: 2 };
 * let o = { a: { val: v, d: 5 } }
 * getObjPath(o,v);  //=> ['a','val']
 * ```
 */
function getObjPath(
        o: { [key:string]: any }, 
        v: any): string[] | undefined {

    for (let k in o) {
        if (o[k] === v) {
            return [k];
        }
        if (typeof o[k] === "object") {
            let path = getObjPath(o[k], v);
            if (path) {
                path.unshift(k);
                
                return path;
            }
        }
    }
}


export { getObjPath }
