import { FunctionComponent } from "react";

import styles from './PasswordScreen.module.scss';

import Image from 'next/image'
import iconCopy from '../../assets/icon-copy.svg';

const PasswordScreen: FunctionComponent = () => {

    return (
        <>
            <div className={styles.password}>
                <h3>P4$5W0rD!</h3>
            </div>
            <button className={styles.button}>
                <Image 
                    src={iconCopy}
                    alt="Copy Icon"
                    />
            </button>
        </>
    )
}

export default PasswordScreen;