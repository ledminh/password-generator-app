import type { NextPage } from 'next'
import Head from 'next/head'
import { Panel } from '../components/Panel'
import PasswordScreen from '../components/PasswordScreen'
import { Strength } from '../components/Strength'


import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
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
          <PasswordScreen />
        </section>
        
        <section className={styles.section + ' ' + styles.mainSection}>
          <Panel />
          <Strength/>
          <button>Generate</button>
        </section>
      </main>
    </div>
  )
}

export default Home
