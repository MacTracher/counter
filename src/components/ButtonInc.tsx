import React from 'react';

type buttonType = {
    title: string;
    callBack: () => void;
    buttonSetDisabled?: boolean
    buttonIncDisabled?: boolean

}

export const ButtonInc = (props: buttonType) => {

    let {title, callBack, buttonSetDisabled, buttonIncDisabled} = props

    const onClickHandler = () => {
        callBack()
    }



    return (
        <>
            <button disabled={buttonIncDisabled} className={'Button-style'} onClick={() => onClickHandler()} style={
                buttonIncDisabled ? {backgroundColor: '#8bb3db'} : {backgroundColor: '#0056b3'}

            }>
                {title}
            </button>
        </>
    );
};

