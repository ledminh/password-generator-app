import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
      <div>
        Password Generator

        P4$5W0rD!

        Character Length

        Include Uppercase Letters
        Include Lowercase Letters
        Include Numbers
        Include Symbols

        Strength

        Generate
      </div>
    </div>
  )
}

export default Home
