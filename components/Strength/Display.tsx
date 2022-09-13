import { FunctionComponent } from "react";

import styles from './Display.module.scss';

const status = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG'];

const Display:FunctionComponent<{strength:number}> = ({strength}) => {

    return (
        <div className={styles.display}>
            <span>{status[strength -1]}</span>
            <div>
                <Bars strength={strength}/>
            </div>
        </div>
    )
}

export default Display;



const Bars:FunctionComponent<{strength:number}> = ({strength}) => {
    const arr = Array(4).fill(0);

    return (
        <div className={styles.bars}>
            {
                arr.map((elem, i) => {
                    if(i < strength) {
                        return <Bar key={"bar-" + i}
                                    filled={true}
                                    strength={strength}/>
                    }
                    
                    return <Bar key={'bar-' + i} 
                                filled={false}
                                strength={strength}
                                />
                })
            }
        </div>
    )
}

const Bar:FunctionComponent<{filled: boolean, strength:number}> = ({filled, strength}) => {
    
    return (
        <div 
            className={styles.bar}
            data-filled={filled}
            data-strength={strength}
        />
    )
}