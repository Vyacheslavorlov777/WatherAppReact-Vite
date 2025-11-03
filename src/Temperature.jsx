// import { useState } from 'react';
import styles from './styles/Temperature.module.css';

export default function Temperature({value}) {

    return (
        <div className={styles.temperature}>
            <span className={styles.value}>{value}</span>
            <span className={styles.unit}>°C</span>
        </div>
    )

}