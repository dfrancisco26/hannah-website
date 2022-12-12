/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import Layout from './Components/Layout'

export default function Home() {
  return (
    <>
      <Head>
      <title>All Dogs Go To Hannah</title>
      <link rel="icon" href="favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Hi+Melody&family=Homemade+Apple&family=Mochiy+Pop+One&family=Nerko+One&family=Sail&family=Shippori+Antique+B1&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
        </header>

        <main className={styles.main}>

          <div className={styles.grid}>
            <Layout />

          </div>
        </main>
      </div></>
  )
}
