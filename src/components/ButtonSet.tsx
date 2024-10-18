import React from 'react';

type buttonType = {
    title: string;
    callBack: () => void;
    buttonSetDisabled?: boolean
    buttonIncDisabled?: boolean

}

export const ButtonSet = (props: buttonType) => {

    let {title, callBack, buttonSetDisabled, buttonIncDisabled} = props

    const onClickHandler = () => {
        callBack()
    }


    return (
        <>
            <button disabled={buttonSetDisabled} className={'Button-style'} onClick={() => onClickHandler()} style={

                buttonSetDisabled ? {backgroundColor: '#8bb3db'} : {backgroundColor: '#0056b3'}

            }>
                {title}
            </button>
        </>
    );
};

