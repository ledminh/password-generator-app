import { FunctionComponent } from "react";
import CopyIcon from "./CopyIcon";

import styles from './PasswordScreen.module.scss';


const PasswordScreen: FunctionComponent<{password:string}> = ({password}) => {

    return (
        <>
            <div className={styles.password}>
                <h3>{password}</h3>
            </div>
            <div className={styles.copy}>
                <span>COPIED</span>
                <button className={styles.button}>
                    <CopyIcon/>
                </button>
            </div>

        </>
    )
}

export default PasswordScreen;