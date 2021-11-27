import styles from './chip.module.scss';

export const Chip = ({ children }) => <div className={styles.container}>{`#${children}`}</div>;
