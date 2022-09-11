import { FunctionComponent } from "react";

import styles from './Display.module.scss';

const Display:FunctionComponent = () => {

    return (
        <div className={styles.display}>
            <span>MEDIUM</span>
            <div>
                <Bars />
            </div>
        </div>
    )
}

export default Display;



const Bars:FunctionComponent = () => {


    return (
        <div className={styles.bars}>
            <Bar />
            <Bar />
            <Bar />
            <Bar />
        </div>
    )
}

const Bar:FunctionComponent = () => {
    
    return (
        <div 
            className={styles.bar}
        />
    )
}