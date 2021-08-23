import { Example } from "./example";

interface Db {
    examples: Example[] | undefined;
}

const emptyDb: Db = {
    examples: undefined
}


export {Db, emptyDb}
