// src/components/DashboardLayout.js
import SideNav from "../ui/sidenav";
import styles from "./page.module.css";
export default function DashboardLayout({ children }) {
    return (
        <div className={styles.main}>
            <SideNav />
            {children}
        </div>
    );
}
