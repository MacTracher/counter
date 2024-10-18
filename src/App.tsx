import React, {useEffect, useState} from 'react';
import './App.css';
import {ButtonSet} from "./components/ButtonSet";
import {InputSettings} from "./components/InputSettings";
import {Output} from "./components/Output";
import {ButtonInc} from "./components/ButtonInc";
import {ButtonReset} from "./components/ButtonReset";
import {start} from "node:repl";

function
App() {

    const [startValue, setStartValue] = useState<number>(() => {

        const savedStartValue = localStorage.getItem('localStorageStartValue');
        return savedStartValue ? JSON.parse(savedStartValue) : 0;
    });

    let [maxValue, setMaxValue] = useState<number>(() => {
        const savedMaxValue = localStorage.getItem('localStorageMaxValue');
        return savedMaxValue ? JSON.parse(savedMaxValue) : 0;
    });

    let [value, setValue] = useState<number>(0);

    let [buttonSetDisabled, setButtonSetDisabled] = useState<boolean>(false);

    let [buttonIncDisabled, setButtonIncDisabled] = useState<boolean>(true);

    let [buttonResetDisabled, setButtonResetDisabled] = useState<boolean>(true);

    let [startScreen, setStartScreen] = useState<boolean>(false);


    useEffect(() => {
        setButtonResetDisabled(true)
    }, []);


    useEffect(() => {

        const savedStartValue:any = localStorage.getItem('localStorageStartValue');


        startValue !== value && value !== JSON.parse(savedStartValue)&& value!==0  ? setButtonResetDisabled(false) : setButtonResetDisabled(true)
    }, [value, startValue]);

    useEffect(() => {
        if (value === maxValue && value !== startValue) {
            setButtonIncDisabled(true);
        }
    }, [value, maxValue, startValue]);

// Синхронізуємо maxValue з localStorage при зміні
    useEffect(() => {
        localStorage.setItem('localStorageMaxValue', JSON.stringify(maxValue));
    }, [maxValue]);

    // Синхронізуємо startValue з localStorage при зміні
    useEffect(() => {
        localStorage.setItem('localStorageStartValue', JSON.stringify(startValue));
    }, [startValue]);

    const OutputValue = (maxValue: number, startValue: number, value: number) => {
        if (maxValue === startValue && maxValue !== 0 || startValue < 0 || maxValue < startValue || Number.isNaN(maxValue) || Number.isNaN(startValue)) {
            setButtonSetDisabled(true)

            return <div
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#8bb3db'}}>Incorrect
                Value!</div>
        }
        if (maxValue === 0 && startValue === 0) {
            return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Enter value and press
                'set'</div>
        }
        if (value === maxValue && maxValue !== 0) {
            return <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#8bb3db',
                fontWeight: '900',
                fontSize: '60px'
            }}>{value}</div>
        } else {
            return <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '900',
                fontSize: '60px'
            }}>{value}</div>
        }
    }

    const functionSetUpMaxValue = (value: number) => {
        setMaxValue(value)
        setButtonSetDisabled(false)

    }
    const functionSetUpStartValue = (value: number) => {
        setStartValue(value)
        setButtonSetDisabled(false)

    }
    const buttonSetFunction = () => {
        setValue(startValue)
        setButtonSetDisabled(true)
        setButtonIncDisabled(false)
        setStartScreen(true)
        console.log(value)
    }


    const buttonIncFunction = () => {

        if (value < maxValue) {

            setValue(value + 1);


        } else if (value === maxValue && value !== startValue) {
            setButtonIncDisabled(true)

        }


    }
    const buttonResetFunction = () => {

        setValue(startValue)


        setButtonIncDisabled(false)
    }


    return (
        <div className={'Main'}>
            <ul className={'UlStyle'}>
                <li className={'UlStyle-in'}>
                    <li style={{marginBottom: '20px'}}>
                        <span className={'styleForSpan'}>Max Value:</span>
                        <InputSettings callBack={functionSetUpMaxValue} value={maxValue}/>
                    </li>

                    <li>
                        <span className={'styleForSpan'}>Min Value: </span>
                        <InputSettings callBack={functionSetUpStartValue} value={startValue}/>
                    </li>
                </li>
                <li className={'li_outside_button'}>
                    <ButtonSet title={"set"} callBack={buttonSetFunction} buttonSetDisabled={buttonSetDisabled}/>
                </li>
            </ul>
            <ul className={'UlStyle'}>
                <li>
                    <Output OutputValue={OutputValue} startScreen={startScreen} value={value} maxValue={maxValue}
                            startValue={startValue}/>
                </li>
                <li className={'li_outside_button'}
                    style={{justifyContent: 'space-between', padding: '0 24px 0 24px', width: '236px'}}>
                    <ButtonInc buttonIncDisabled={buttonIncDisabled} title={"inc"} callBack={buttonIncFunction}/>

                    <ButtonReset buttonResetDisabled={buttonResetDisabled} title={"reset"}
                                 callBack={buttonResetFunction}/>
                </li>
            </ul>
        </div>
    );
}

export default App;
