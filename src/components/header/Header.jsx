import { Chip } from './chip/Chip';
import styles from './header.module.scss';

export const Header = () => (
  <div className={styles.container}>
    <Chip>hello</Chip>
  </div>
);
