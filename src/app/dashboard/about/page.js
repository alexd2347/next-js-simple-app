'use client'
import styles from "../page.module.css";
import { useState, useEffect } from 'react';
import { getArmeria } from '../../services/armeria';

export default function Page() {
    const [armeriaData, setArmeriaData] = useState([]);

    const [filterStartDate, setFilterStartDate] = useState('');
    const [filterEndDate, setFilterEndDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const formattedFirstDay = firstDayOfMonth.toISOString().split('T')[0];
        const formattedToday = today.toISOString().split('T')[0];
        setFilterStartDate(formattedFirstDay);
        setFilterEndDate(formattedToday);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getArmeria(filterStartDate, filterEndDate);
                setArmeriaData(data);
            } catch (error) {
                console.log(error);
            }
        };
        if (filterStartDate && filterEndDate) {
            fetchData();
        }
    }, [filterStartDate, filterEndDate]);

    return (
        <div className={styles.mainContent}>
            About
            {armeriaData.map((item, index) => (
                <div key={index} className={styles.itemContainer}>
                    <div className={styles.itemDetail}>Empleado: {item.no_empleado}</div>
                    <div className={styles.itemDetail}>Oficial: {item.oficial}</div>
                    <div className={styles.itemDetail}>Checkin: {item.checkin}</div>
                    <div className={styles.itemDetail}>{item.numero_de_camaras} Cámaras</div>
                </div>
            ))}
        </div>
    );
}
