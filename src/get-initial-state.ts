
import { AppState } from "./state/app-state";
import { defaultAppState } from "./state/default-state";


function getInitialState(): AppState {
    let appStateJson = localStorage.getItem('app-state');
    if (!appStateJson) { return defaultAppState; }

    let storedState: AppState = JSON.parse(appStateJson);
    if (storedState.version !== defaultAppState.version) {
        return defaultAppState;
    }

    return storedState 
}


export { getInitialState }
