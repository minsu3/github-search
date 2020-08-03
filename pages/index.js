import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Github Job Search</h1>
        <div className={styles.grid}>
          <a href="/next" className={styles.card}>
            <p>Get started</p>
          </a>
        </div>
      </main>
    </div>
  )
}
