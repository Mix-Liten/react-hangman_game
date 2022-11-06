import { FC, ReactNode } from 'react'
import styles from './Alert.module.css'

type AlertProps = {
  type: 'success' | 'error'
  children: ReactNode
}

const Alert: FC<AlertProps> = ({ type, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.alert} ${styles[type]}`}>
        <span className={styles.alertBody}>{children}</span>
      </div>
    </div>
  )
}

export default Alert
