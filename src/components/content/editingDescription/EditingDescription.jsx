import { useCallback, useState } from 'react';

import { useNotes } from '../../../hooks/useNotes';
import { AutoHeightTextarea } from '../../../shared/autoHeightTextarea/AutoHeightTextarea';
import { CustomButton } from '../../../shared/customButton/CustomButton';
import styles from './editingDescription.module.scss';

export const EditingDescription = ({ setIsEditDescription, description, id }) => {
  const { notes, setNotes } = useNotes();
  const [newDescription, setNewDescription] = useState(description);
  const handleCancel = useCallback(() => {
    setIsEditDescription(false);
  }, [setIsEditDescription]);

  const editDescription = useCallback((e) => {
    setNewDescription(e.target.value);
  }, []);

  const handleUpdateDescription = useCallback(() => {
    const newNotes = [...notes].map((note) => {
      if (note.id === id) return { ...note, description: newDescription };

      return note;
    });

    setNotes(newNotes);
    handleCancel();
  }, [id, newDescription, notes, setNotes, handleCancel]);

  return (
    <div className={styles.container}>
      <div>
        <AutoHeightTextarea description={description} onChange={editDescription} />
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton onClick={handleCancel}>Отмена</CustomButton>
        <CustomButton type="primary" onClick={handleUpdateDescription}>
          Изменить
        </CustomButton>
      </div>
    </div>
  );
};
