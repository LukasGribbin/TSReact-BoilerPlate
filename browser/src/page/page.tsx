import * as React from 'react';
import { StateControl } from '../state-control/state-control';
import { useStyles } from './styles';
import { PageState } from '../state/page-state';
import { Checkbox } from '../components/simple-checkbox';
import { Db } from '../state/db';
import {HeadCell} from '../components/table'
import {Example} from '../state/example'
import {EnhancedTable} from '../components/table'


interface Props {
	stateControl: StateControl;
	pageState: PageState;
	db: Db;
}


const headCells: HeadCell<Example>[] = [
	{ key: 'exampleNumber', label: 'Example Number!' },
	{ key: 'exampleString', label: 'Example String!' },
  ];

function Page(props: Props) {
	// Props
	const { stateControl, pageState, db } = props;
    const { state, upd, upd$ } = stateControl;
    const { appState } = state;
	const { welcomeMessage } = pageState;

	// Hooks
	const classes = useStyles();
	const arr = [1,2,3,4,5,6];

	

	return (<>
		{arr.map((n: number) => <Checkbox key={n} text='check me!' checked={true}/>)}
		{welcomeMessage}
		<br/>
		{JSON.stringify(db.examples)}
		<EnhancedTable
			headCells={headCells}
			rows={db.examples || []}
		/>
    </>);
}

export { Page }
