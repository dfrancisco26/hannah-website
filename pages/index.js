import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import Layout from './Components/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        </header>

      <main className={styles.main}>

        <div className={styles.grid}>
          <Layout />
          
        </div>
      </main>
    </div>
  )
}
