import { useCallback, useState } from 'react';

import { useNotes } from '../../../hooks/useNotes';
import { AutoHeightTextarea } from '../../../shared/autoHeightTextarea/AutoHeightTextarea';
import { CustomButton } from '../../../shared/customButton/CustomButton';
import styles from './editingDescription.module.scss';

export const EditingDescription = ({ setEditDescription, description, index }) => {
  const { notes, setNotes } = useNotes();
  const [newDescription] = useState(description);
  const handleCancel = useCallback(() => {
    setEditDescription(false);
  }, [setEditDescription]);

  const handleEditDescription = useCallback(() => {
    const newNotes = [];

    [...notes].forEach((note, i) => {
      if (i === index) {
        newNotes.push({ ...note, description: newDescription });
      }

      newNotes.push(note);
    });

    setNotes(newNotes);
    setEditDescription(false);
  }, [setEditDescription, newDescription, index, notes, setNotes]);

  return (
    <div className={styles.container}>
      <div>
        <AutoHeightTextarea description={description} />
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton onClick={handleCancel}>Отмена</CustomButton>
        <CustomButton type="primary" onClick={handleEditDescription}>
          Изменить
        </CustomButton>
      </div>
    </div>
  );
};
