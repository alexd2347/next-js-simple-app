import Link from 'next/link';
import styles from './sidenav.module.css';

const Sidenav = () => {
    return (
        <div className={styles.sidenav}>
            <div className={styles.linksContainer}>
                <Link className={styles.link} href="/dashboard">
                    Home
                </Link>
                <Link className={styles.link} href="/dashboard/about">
                    About
                </Link>
                <Link className={styles.link} href="/dashboard/contact">
                    Contact
                </Link>
            </div>
            <div className={styles.salirContainer}>
                <Link className={styles.salir} href="/">
                    salir
                </Link>
            </div>
        </div>
    );
};

export default Sidenav;
