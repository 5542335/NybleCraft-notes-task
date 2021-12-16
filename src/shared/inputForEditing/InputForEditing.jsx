import styles from './inputForEditing.module.scss';

const confirmIcon = <img src="https://img.icons8.com/fluency/20/000000/ok.png" alt="" />;
const closeIcon = <img src="https://img.icons8.com/plumpy/20/000000/close-window.png" alt="" />;

export const InputForEditing = ({ onChange, confirmClick, cancelClick, defaulInputValue }) => (
  <>
    <input className={styles.input} defaultValue={defaulInputValue} onChange={onChange} />
    <button type="button" className={styles.confirmIconBtn} onClick={confirmClick}>
      {confirmIcon}
    </button>
    <button type="button" className={styles.closeIconBtn} onClick={cancelClick}>
      {closeIcon}
    </button>
  </>
);
