import styles from '../styles/Home.module.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Banner />
        </header>

      <main className={styles.main}>

        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
