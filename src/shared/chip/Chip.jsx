import styles from './chip.module.scss';

export const Chip = ({ children, onClick, className }) => (
  <div className={`${styles.container} ${className}`} onClick={onClick}>{`${children}`}</div>
);
