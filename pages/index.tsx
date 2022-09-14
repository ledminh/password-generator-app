import type { NextPage } from 'next'
import Head from 'next/head'
import { Panel } from '../components/Panel'
import PasswordScreen from '../components/PasswordScreen'
import { Strength } from '../components/Strength'

import styles from '../styles/Home.module.scss'
import RightArrow from '../components/RightArrow'
import useStatus from '../reducer'
import { useEffect, useState } from 'react'
import getStrength from '../utils/getStrength'
import generatePassword from '../utils/generatePassword'

const Home: NextPage = () => {
  const [password, setPassword] = useState('P4$5W0rD!');

  const [
    status,
    setLength,
    setIncludeLowerCase,
    setIncludeUpperCase,
    setIncludeNumbers,
    setIncludeSymbols
  ] = useStatus();

  const [strength, setStrength] = useState(-1);

  useEffect(() => {
    const curStrength = getStrength(status.length, status.upperCaseIncluded, status.lowerCaseIncluded, status.numbersIncluded, status.symbolsIncluded);
    
    
    setStrength(curStrength);
    

  }, [setLength, status]);

  


  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />        
        <title>Frontend Mentor | Password generator app</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.header}>
          <span>Password Generator</span>
        </section>

        <section className={styles.section + ' ' + styles.passwordScreen}>
          <PasswordScreen 
            password={password}/>
        </section>
        
        <section className={styles.section + ' ' + styles.mainSection}>
          <Panel 
            {...{status, setLength, setIncludeLowerCase, setIncludeUpperCase, setIncludeNumbers, setIncludeSymbols}}
            />
          <Strength strength={strength}/>
          <button className={styles.button}
            disabled={strength===0}
            onClick={() => setPassword(generatePassword(status.length, status.upperCaseIncluded, status.lowerCaseIncluded, status.numbersIncluded, status.symbolsIncluded))}
          >
            <span>GENERATE</span>
            <RightArrow />
          </button>
        </section>
      </main>
    </div>
  )
}

export default Home
