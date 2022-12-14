import { FunctionComponent, useEffect, useState } from "react";
import styles from './Panel.module.scss';

import { SetIncludeFunction, SetLengthAction, State } from "../../reducer";

interface propType {
    status: State,
    setLength: SetLengthAction,
    setIncludeLowerCase: SetIncludeFunction, 
    setIncludeUpperCase: SetIncludeFunction, 
    setIncludeNumbers: SetIncludeFunction, 
    setIncludeSymbols:SetIncludeFunction
} 

export const Panel: FunctionComponent<propType> = ({status, setLength, setIncludeLowerCase, setIncludeUpperCase, setIncludeNumbers, setIncludeSymbols}) => {
    

    return (
        <form>
            <CharacterLength 
                min={0}
                max={20}
                length={status.length}
                setLength={setLength}
            />
            <ul className={styles.ul}>
                <li>
                    <input type="checkbox" 
                            id="uppercase" 
                            name="uppercase"
                            checked={status.upperCaseIncluded}

                            onChange={e => {
                                setIncludeUpperCase(e.target.checked)
                            }}
                            />
                    <label htmlFor="uppercase">
                        Include Uppercase Letters
                    </label>
                </li>
                <li>
                    <input type="checkbox" 
                            id="lowercase" 
                            name="lowercase"
                            checked={status.lowerCaseIncluded}

                            onChange={e => {
                                setIncludeLowerCase(e.target.checked)
                            }}
                            />
                    <label htmlFor="lowercase">
                        Include Lowercase Letters
                    </label>
                </li>
                <li>
                    <input type="checkbox" 
                            id="number" 
                            name="number"
                            checked={status.numbersIncluded}

                            onChange={e => {
                                setIncludeNumbers(e.target.checked)
                            }}
                            />
                    <label htmlFor="number">
                        Include Numbers
                    </label>
                </li>
                <li>
                    <input type="checkbox" 
                            id="symbol" 
                            name="symbol"
                            
                            checked={status.symbolsIncluded}

                            onChange={e => {
                                setIncludeSymbols(e.target.checked)
                            }}
                            />
                    <label htmlFor="symbol">
                        Include Symbols
                    </label>
                </li>
            </ul>
        </form>
    );
}


const CharacterLength:FunctionComponent<{length:number, min:number, max:number, setLength:SetLengthAction}> = ({length, min, max, setLength}) => {
    
    useEffect(() => {
        setLength(min + Math.floor(max - min)/2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.characterLength}>
            <label htmlFor="character-length">
                <span className={styles.text}>
                    Character Length
                </span>
                <h3>
                    <span className={styles.value}>
                        {length}
                    </span>
                </h3>
            </label>
            <input type="range" 
                    id="character-length" 
                    name="character-length"
                    min={min} max={max}
                    value={length}
                    onChange={e => {
                        const curValue = Number(e.target.value),
                                maxValue = Number(e.target.max);
                        const curPercent = curValue*100/maxValue;

                        e.target.style.setProperty('--curPercent', curPercent + '%');
                        
                        setLength(curValue);
                    }}
                    />
        </div>
    )
}