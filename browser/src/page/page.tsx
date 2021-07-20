import * as React from 'react';
import { StateControl } from '../state-control/state-control';
import { useStyles } from './styles';
import { PageState } from '../state/page-state';
import { Checkbox } from '../components/simple-checkbox';



interface Props {
	stateControl: StateControl;
	pageState: PageState;
}


function Page(props: Props) {
	// Props
	const { stateControl, pageState } = props;
    const { state, upd, upd$ } = stateControl;
    const { appState } = state;
	const { welcomeMessage } = pageState;

	// Hooks
	const classes = useStyles();
	const arr = [1,2,3,4,5,6];

	return (<>
		{arr.map((n: number) => <Checkbox key={n} text='check me!' checked={true}/>)}
		{welcomeMessage}
    </>);
}

export { Page }
