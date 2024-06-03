import styles from "./page.module.css";
import Login from "./login/login";

export default function Home() {
  
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
