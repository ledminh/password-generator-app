import { FunctionComponent } from "react";
import CopyIcon from "./CopyIcon";

import styles from './PasswordScreen.module.scss';


const PasswordScreen: FunctionComponent = () => {

    return (
        <>
            <div className={styles.password}>
                <h3>P4$5W0rD!</h3>
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