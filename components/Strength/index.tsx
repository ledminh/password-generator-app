import { FunctionComponent } from "react";
import styles from './Strength.module.scss';

import Display from "./Display";


export const Strength:FunctionComponent<{strength:number}> = ({strength}) => {

    return (
        <div className={styles.strength}>
            <div className={styles.label}>
                STRENGTH
            </div>
            <Display strength={strength}/>
        </div>
    );
}



