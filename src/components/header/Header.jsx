import styles from './header.module.scss';
import { AddNoteButton } from './addNoteButton/AddNoteButton';

export const Header = () => (
  <div className={styles.container}>
    <div className={styles.logo}>NoteManager</div>
    <AddNoteButton />
    {/* <div className={styles.addBtn}>Button</div> */}
  </div>
);
