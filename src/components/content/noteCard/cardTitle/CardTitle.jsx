import { useState, useCallback } from 'react';

import { EditingTitle } from '../../editingTitle/EditingTitle';
import styles from './cardTitle.module.scss';

export const CardTitle = ({ title, deleteCard, id }) => {
  const [showTitleInput, setShowTitleInput] = useState(false);
  const editTitle = useCallback(() => {
    setShowTitleInput(true);
  }, []);

  return (
    <div className={styles.cardHeader}>
      {showTitleInput ? (
        <EditingTitle setShowTitleInput={setShowTitleInput} title={title} id={id} />
      ) : (
        <div className={styles.title} onClick={editTitle}>
          {title}
        </div>
      )}
      <button type="button" className={styles.deleteCardBtn} onClick={deleteCard}>
        <img src="https://img.icons8.com/office/16/000000/delete-sign.png" alt="" />
      </button>
    </div>
  );
};
