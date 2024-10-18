import React, {useState} from 'react';
import {cleanup} from "@testing-library/react";


type inputSettingsType = {
    callBack: (value:number)=>void
    value?: number

}

export const InputSettings = (props: inputSettingsType) => {



    let {callBack,value} = props;

    const onChangeHandler = (value:number) => {

        callBack(value)
    }



    return (
        <>
            <input
                className="inputStyle"
                type="number"
                onChange={(event) => onChangeHandler(event.currentTarget.valueAsNumber)}
                value={value}

            />
            <style>{`
                /* Chrome, Safari, Edge, Opera */
                input[type='number']::-webkit-outer-spin-button,
                input[type='number']::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                /* Firefox */
                input[type='number'] {
                    -moz-appearance: textfield;
                }
            `}</style>
        </>
    );
};

