import styles from './Layout.module.css'
import Link from 'next/link'


export const Layout = ({children}) => {
  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
         <h2>CareSale</h2>
         <p>Choose and Buy your Car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
       Car Sale Project |  Made with 💖 $copy
      </footer>
    </>
  )
}
