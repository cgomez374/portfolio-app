import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <header className={styles.header}>
      <div className={styles.header_title}>
        <h1>Welcome! I'm Carlos, <br/> a front-end engineer!</h1>
        <p>
          Looking for a web page developer? look no further!<br />
          Im an up-and-coming professional at creating web pages.
         </p>
      </div>
    </header>
    </>
  )
}
