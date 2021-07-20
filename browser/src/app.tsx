
import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { _upd } from './state-control/upd';
import { State } from './state/state';
import { StateControl } from './state-control/state-control';
import { useStyles } from './styles';
import { getInitialState } from './get-initial-state';
import { Page } from './page/page';


function App() {
    const classes = useStyles();
    const [appState, setAppState] = useState(getInitialState);
    const [state] = useState((): State => ({ appState }));
    const [{upd, upd$}] = useState(() => _upd(state, setAppState));
    const [stateControl] = useState((): StateControl => ({ 
        state, upd, upd$,
    }));

    const { pageState } = appState;

    return (
        <Router>
        <main 
            className={classes.root}
        >
            <Switch>
                <Route path="/">
                    <Page
						stateControl={stateControl}
						pageState={pageState}
                    />
                </Route>
            </Switch>
        </main>
        </Router>
    );
}


ReactDOM.render(<App />, document.getElementById('app'));
