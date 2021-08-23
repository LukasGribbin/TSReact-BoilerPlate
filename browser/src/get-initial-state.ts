import { toLocalStorage } from "./state-control/upd";
import { AppState } from "./state/app-state";
import { emptyDb } from "./state/db";
import { defaultAppState } from "./state/default-state";


function getInitialState(): AppState {
    let appStateJson = localStorage.getItem('app-state');
    if (!appStateJson) { 
        toLocalStorage(defaultAppState);
        return defaultAppState; 
    }

    let storedState: AppState = JSON.parse(appStateJson);
    if (storedState.version !== defaultAppState.version) {
        return defaultAppState; 
    }

    return { ...defaultAppState, ...storedState }
}


export { getInitialState }
