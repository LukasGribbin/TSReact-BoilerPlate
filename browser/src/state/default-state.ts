import { AppState } from './app-state';
import { Db, emptyDb } from './db';
import { PageState } from './page-state';



const defaultPageState: PageState = {
    welcomeMessage: "Hello!"
}


const defaultAppState: AppState = {
    version: 3,
    pageState: defaultPageState,
    db: emptyDb
};


export { 
    defaultAppState, 
    defaultPageState, 
}
