import Link from 'next/link';
import styles from './Login.module.css';
import Image from 'next/image';

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>

        <Image src='/next.svg' alt="logo" width={150} height={150} className={styles.logo} />
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            required
          />
        </div>
        <Link type="submit" className={styles.button} href={'/dashboard'}>
          Login
        </Link>
      </form>
    </div>
  );
}
