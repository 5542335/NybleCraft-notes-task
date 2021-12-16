import { useCallback, useState } from 'react';

import { useNotes } from 'hooks/useNotes';
import { InputForEditing } from 'shared/inputForEditing/InputForEditing';

import styles from './addTags.module.scss';

export const AddTag = ({ id }) => {
  const { notes, updateNoteById } = useNotes();
  const [showAddTagInput, setShowAddTagInput] = useState(false);
  const [tagForAdd, setTagForAdd] = useState('');

  const addHashTagInStr = useCallback(() => {
    const arrFromTagStr = tagForAdd.trim();

    return arrFromTagStr[0] !== '#' ? `#${arrFromTagStr}` : arrFromTagStr;
  }, [tagForAdd]);

  const closeInput = useCallback(() => {
    setShowAddTagInput(false);
  }, []);

  const handleAddTag = useCallback(() => {
    if (tagForAdd) {
      const note = notes.find(({ id: noteId }) => id === noteId);

      note.tags.unshift(addHashTagInStr());

      updateNoteById(id, { tags: note.tags });
    }

    closeInput();
  }, [tagForAdd, closeInput, notes, updateNoteById, id, addHashTagInStr]);

  const handleShowAddInputBtn = useCallback(() => {
    setShowAddTagInput(true);
  }, []);

  const handleChangeTag = useCallback((e) => {
    setTagForAdd(e.target.value);
  }, []);

  return showAddTagInput ? (
    <InputForEditing onChange={handleChangeTag} confirmClick={handleAddTag} cancelClick={closeInput} />
  ) : (
    <button type="button" className={styles.addTagBtn} onClick={handleShowAddInputBtn}>
      +
    </button>
  );
};
