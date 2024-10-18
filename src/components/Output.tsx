import React from 'react';

type outputType = {
    value: number
    maxValue: number
    startValue: number
    startScreen: boolean
    OutputValue:(maxValue: number, startValue: number, value: number)=>void
}

export const Output = (props: outputType) => {

    let {value, maxValue, startValue, startScreen,OutputValue} = props

    let g:any = OutputValue(maxValue,startValue,value)


    return (
        <>
            {/*<input*/}

            {/*    disabled={true}*/}

            {/*    style={value === maxValue && value !== startValue && value > startValue ? {color: 'green'} : {}}*/}

            {/*    className={startScreen ? 'Output-style' : 'EnterValueAndPressStyle'}*/}

            {/*    type="sting"*/}

            {/*    value={g}/>*/}
            <div  className={'EnterValueAndPressStyle'}>
                {g}
            </div>
        </>
    );
};

