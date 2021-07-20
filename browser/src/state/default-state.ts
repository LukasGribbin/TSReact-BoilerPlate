import { AppState } from './app-state';
import { PageState } from './page-state';



const defaultPageState: PageState = {
    welcomeMessage: "Hello!"
}


const defaultAppState: AppState = {
    version: 3,
    pageState: defaultPageState
};


export { 
    defaultAppState, 
    defaultPageState, 
}
