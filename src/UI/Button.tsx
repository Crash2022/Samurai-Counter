import React from 'react';
import '../App.css';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callback();
    }

    return (
        <button onClick={onClickHandler}
                disabled={props.disabled}
        >
            {props.name}
        </button>
    );
}