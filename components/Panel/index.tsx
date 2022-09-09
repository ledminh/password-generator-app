import { FunctionComponent } from "react";
import styles from './Panel.module.scss';

export const Panel: FunctionComponent = () => {


    return (
        <form>
            <div className={styles.characterLength}>
                <label htmlFor="character-length">
                    <span className={styles.text}>
                        Character Length
                    </span>
                    <span className={styles.value}>
                        10
                    </span>
                </label>
                <input type="range" 
                        id="character-length" 
                        name="character-length"
                        min="0" max="20"
                        />
            </div>
            <ul>
                <li>
                    <input type="checkbox" 
                            id="uppercase" 
                            name="uppercase"/>
                    <label htmlFor="upercase">
                        Include Uppercase Letters
                    </label>
                </li>
                <li>
                    <input type="checkbox" 
                            id="lowercase" 
                            name="lowercase"/>
                    <label htmlFor="lowercase">
                        Include Lowercase Letters
                    </label>
                </li>
                <li>
                    <input type="checkbox" 
                            id="number" 
                            name="number"/>
                    <label htmlFor="number">
                        Include Numbers
                    </label>
                </li>
                <li>
                    <input type="checkbox" 
                            id="symbol" 
                            name="symbol"/>
                    <label htmlFor="symbol">
                        Include Symbols
                    </label>
                </li>
            </ul>
        </form>
    );
}