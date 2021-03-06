import * as React from 'react';
import { memo } from 'react';


interface Props {
    text: string;
    styles?: { div: React.CSSProperties },
    checked: boolean;
    onChanged?: (checked: boolean) => void;
}


function Checkbox(props: Props) {
    const { styles, text, onChanged, checked } = props;
    const idStr = Math.random().toString();

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChanged) { onChanged(event.target.checked); }
    }

    return (
        <div style={styles?.div}>
            <input type="checkbox" id={idStr} onChange={onChange} checked={checked} />
            <label htmlFor={idStr}>{text}</label>
        </div>
    );
};


export { Checkbox }
    