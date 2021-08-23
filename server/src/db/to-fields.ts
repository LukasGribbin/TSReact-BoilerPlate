
/**
 * Return the given item excluding its id property
 * @param item A database raw object
 */
function toFields<T extends { id: number }>(item: T) {
    let { id, ...rest } = item;
    
    return rest;
}


export { toFields }
