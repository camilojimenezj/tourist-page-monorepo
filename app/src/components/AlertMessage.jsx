import React from 'react'
import styles from '../styles/alert.module.css'

export default function AlertMessage({ message }) {
  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h3>{message}</h3>
      </div>
    </div>
  )
}
