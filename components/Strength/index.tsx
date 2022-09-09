import { FunctionComponent } from "react";
import styles from './Strength.module.scss';

export const Strength:FunctionComponent = () => {

    return (
        <div className={styles.strength}>
            <div className={styles.label}>
                STRENGTH
            </div>
            <div className={styles.display}>
                <span>MEDIUM</span>
                <div>||||</div>
            </div>
        </div>
    );
}