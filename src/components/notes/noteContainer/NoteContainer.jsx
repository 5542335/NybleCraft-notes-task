import styles from './noteContainer.module.scss';

export const NoteContainer = ({ children }) => <div className={styles.container}>{children}</div>;
