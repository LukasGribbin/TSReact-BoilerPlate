
function objToFieldNames(o: { [key:string]: unknown }): string {
    return Object.keys(o).toString();
}


export { objToFieldNames }
