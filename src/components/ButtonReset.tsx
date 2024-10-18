import React from 'react';

type buttonType = {
    title: string;
    callBack: () => void;
    buttonSetDisabled?: boolean
    buttonIncDisabled?: boolean
    buttonResetDisabled?: boolean

}

export const ButtonReset = (props: buttonType) => {

    let {title, callBack, buttonSetDisabled, buttonIncDisabled,buttonResetDisabled} = props

    const onClickHandler = () => {
        callBack()
    }


    return (
        <>
            <button disabled={buttonResetDisabled} className={'Button-style'} onClick={() => onClickHandler()} style={

                buttonResetDisabled ? {backgroundColor: '#8bb3db'} : {backgroundColor: '#0056b3'}

            }>
                {title}
            </button>
        </>
    );
};

