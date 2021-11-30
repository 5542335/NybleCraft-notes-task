import { useCallback, useState } from 'react';

import { EditingDescription } from '../editingDescription/EditingDescription';
import styles from './noteCard.module.scss';

export const NoteCard = ({ title, description, tags, deleteCard, index }) => {
  const [editDesciption, setEditDescription] = useState(false);

  const editText = useCallback(() => {
    setEditDescription(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttons}>
          <button type="button" onClick={deleteCard}>
            <img src="https://img.icons8.com/office/16/000000/delete-sign.png" alt="" />
          </button>
        </div>
      </div>
      <div className={styles.description}>
        {editDesciption ? (
          <EditingDescription setEditDescription={setEditDescription} description={description} index={index} />
        ) : (
          <div onClick={editText} style={{ backgroundColor: '#edffd9' }}>
            {description}
          </div>
        )}
      </div>
      <div className={styles.tags}>{tags.join(' ')}</div>
    </div>
  );
};
