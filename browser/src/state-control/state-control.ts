
import { State } from '../state/state';
import { UpdFunction } from './upd';



interface StateControl {
    /** 
     * State that: 
     * * is stored to local storage
     * * updates react components
     */
    state: State;
    /** Updates state and triggers react render */
    upd: UpdFunction;
    /** Updates state and *does not*  triggers react render */
    upd$: UpdFunction;
}


export { StateControl }
