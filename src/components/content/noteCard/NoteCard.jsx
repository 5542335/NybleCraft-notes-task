import { useCallback, useState } from 'react';

import { EditingDescription } from '../editingDescription/EditingDescription';
import styles from './noteCard.module.scss';
import { useNotes } from '../../../hooks/useNotes';

export const NoteCard = ({ title, description, tags, deleteCard, id }) => {
  const { notes, setNotes } = useNotes();
  const [isEditDesciption, setIsEditDescription] = useState(false);
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagForAdd, setTagForAdd] = useState('');

  const isHashTagInStr = useCallback(() => {
    if (tagForAdd) {
      const arrFromTagStr = tagForAdd.trim().split('');

      if (arrFromTagStr[0] !== '#') {
        arrFromTagStr.unshift('#');

        return arrFromTagStr.join('');
      }

      return arrFromTagStr.join('');
    }

    return null;
  }, [tagForAdd]);

  const editText = useCallback(() => {
    setIsEditDescription(true);
  }, []);

  const handleShowInputBtn = useCallback(() => {
    setShowTagInput(true);
  }, []);

  const handleCloseBtn = useCallback(() => {
    setShowTagInput(false);
  }, []);

  const handleChangeTag = useCallback((e) => {
    setTagForAdd(e.target.value);
  }, []);

  const handleAddTag = useCallback(() => {
    if (isHashTagInStr()) {
      const newNotes = [...notes].map((note) => {
        if (note.id === id) {
          note.tags.unshift(isHashTagInStr());

          return note;
        }

        return note;
      });

      setNotes(newNotes);
      handleCloseBtn();
    }

    handleCloseBtn();
  }, [id, notes, setNotes, handleCloseBtn, isHashTagInStr]);

  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.title}>{title}</div>
        <button type="button" className={styles.deleteCardBtn} onClick={deleteCard}>
          <img src="https://img.icons8.com/office/16/000000/delete-sign.png" alt="" />
        </button>
      </div>
      <div className={styles.description}>
        {isEditDesciption ? (
          <EditingDescription setIsEditDescription={setIsEditDescription} description={description} id={id} />
        ) : (
          <div onClick={editText}>{description}</div>
        )}
      </div>
      <div className={styles.tags}>
        {showTagInput ? (
          <>
            <input className={styles.addTagInput} defaultValue="#" onChange={handleChangeTag} />
            <button type="button" className={styles.addTagIcon} onClick={handleAddTag}>
              <img src="https://img.icons8.com/fluency/20/000000/ok.png" alt="" />
            </button>
            <button type="button" className={styles.closeIconBtn} onClick={handleCloseBtn}>
              <img src="https://img.icons8.com/plumpy/20/000000/close-window.png" alt="" />
            </button>
          </>
        ) : (
          <button type="button" className={styles.addTagBtn} onClick={handleShowInputBtn}>
            +
          </button>
        )}
        {tags.join(' ')}
      </div>
    </div>
  );
};
