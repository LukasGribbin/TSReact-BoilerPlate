
import { State } from "../state/state";
import { AppState } from "../state/app-state";
import { _updObj } from "./upd-obj";
import { NestedObj } from './nested-obj';


type UpdFunction = <T extends NestedObj>(v: T, newV: Partial<T>) => T;

interface Upd {
    upd: UpdFunction;
    upd$: UpdFunction;
}


function _upd(
        state: State,
        setState: React.Dispatch<React.SetStateAction<AppState>>) {

    let map: Map<any,string[]> = new Map();
    let weakMap: WeakMap<any,string[]> = new WeakMap();
    let updObj = _updObj(state, map, weakMap);

    /** 
     * @param triggerRender If true, then triggers a react and localstorage 
     * update
     */
    function createUpdFs<T extends NestedObj>(triggerRender: boolean) {
        return(v: T, newV: Partial<T>) => {

            let { appState, newV_ } = updObj(v,newV);
            state.appState = appState;

            if (triggerRender) {
                setState(appState);
                toLocalStorage(appState);
            }

            return newV_;
        }
    }

    /** 
     * Updates state and triggers react render 
     */
    const upd = createUpdFs(true);
    /** 
     * Updates state and *does not* trigger react render 
     */
    const upd$ = createUpdFs(false);

    return { upd, upd$ };
}


function toLocalStorage(appState: AppState) {
    localStorage.setItem(
        'app-state', 
        JSON.stringify(appState)
    );
}


export { _upd, Upd, UpdFunction }
