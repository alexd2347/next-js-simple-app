import Link from 'next/link';
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>Login</h2>
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
