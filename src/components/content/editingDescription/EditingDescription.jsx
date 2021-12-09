import { useCallback, useState } from 'react';

import { useNotes } from '../../../hooks/useNotes';
import { HighlightTextArea } from './highlightTextArea/HighlightTeaxArea';
import { CustomButton } from '../../../shared/customButton/CustomButton';
import styles from './editingDescription.module.scss';

export const EditingDescription = ({ setIsEditDescription, description, id }) => {
  const { updateNoteById } = useNotes();
  const [newDescription, setNewDescription] = useState(description);
  const handleClose = useCallback(() => {
    setIsEditDescription(false);
  }, [setIsEditDescription]);

  const handleUpdateDescription = useCallback(() => {
    updateNoteById(id, { description: newDescription || 'Без описания' });
    handleClose();
  }, [id, updateNoteById, handleClose, newDescription]);

  return (
    <div className={styles.container}>
      <HighlightTextArea text={newDescription} onChange={setNewDescription} />
      <div className={styles.buttonContainer}>
        <CustomButton onClick={handleClose}>Отмена</CustomButton>
        <CustomButton type="primary" onClick={handleUpdateDescription}>
          Изменить
        </CustomButton>
      </div>
    </div>
  );
};
