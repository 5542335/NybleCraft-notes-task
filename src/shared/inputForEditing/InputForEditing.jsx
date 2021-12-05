import styles from './inputForEditing.module.scss';

export const InputForEditing = ({ onChange, confirmClick, cancelClick, defaulInputValue }) => (
  <>
    <input className={styles.addTagInput} defaultValue={defaulInputValue} onChange={onChange} />
    <button type="button" className={styles.addTagIcon} onClick={confirmClick}>
      <img src="https://img.icons8.com/fluency/20/000000/ok.png" alt="" />
    </button>
    <button type="button" className={styles.closeIconBtn} onClick={cancelClick}>
      <img src="https://img.icons8.com/plumpy/20/000000/close-window.png" alt="" />
    </button>
  </>
);
