import { FunctionComponent, useEffect, useState } from "react";
import copyTextToClipboard from "../../utils/copytoClipboard";
import CopyIcon from "./CopyIcon";

import styles from './PasswordScreen.module.scss';


const PasswordScreen: FunctionComponent<{password:string}> = ({password}) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(()  => {
        setIsCopied(false);

    }, [password]);
    
    return (
        <>
            <div className={styles.password}>
                <h3>{password}</h3>
            </div>
            <div className={styles.copy}>
                {isCopied? <span>COPIED</span> : null}
                <button className={styles.button}
                    aria-label="Copy text to clipboard"
                    onClick={() => {
                        copyTextToClipboard(password, () => setIsCopied(true));
                    }}>
                    <CopyIcon/>
                </button>
            </div>

        </>
    )
}

export default PasswordScreen;