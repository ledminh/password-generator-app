import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import iconCopy from '../assets/icon-copy.svg';

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
      <main>
        <section className={styles.header}>
          <span>Password Generator</span>
        </section>

        <section className={styles.section}>
          <div className={styles.password}>
            P4$5W0rD!
          </div>
          <button>
            <Image 
              src={iconCopy}
              alt="Copy Icon"
            />
          </button>
        </section>
        
        <section className={styles.section}>
          <div>
            Character Length
          </div>
          <form>
            Include Uppercase Letters
            Include Lowercase Letters
            Include Numbers
            Include Symbols
          </form>
          <div>
            Strength
          </div>

          <button>Generate</button>
        </section>
      </main>
    </div>
  )
}

export default Home
