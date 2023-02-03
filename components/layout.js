import styles from './layouts.module.css';

export function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }