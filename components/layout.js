import styles from './Layouts.module.css';

export function Layout({ children }) {
    return <div className={styles.container}>{children}</div>;
  }