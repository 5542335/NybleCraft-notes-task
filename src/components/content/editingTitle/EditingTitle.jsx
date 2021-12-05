import { useCallback, useState } from 'react';

import { useNotes } from '../../../hooks/useNotes';
import { InputForEditing } from '../../../shared/inputForEditing/InputForEditing';

export const EditingTitle = ({ setShowTitleInput, title, id }) => {
  const { notes, setNotes } = useNotes();
  const [newTitle, setNewTitle] = useState('');

  const handleChangeTitle = useCallback((e) => {
    setNewTitle(e.target.value);
  }, []);

  const saveNewTitle = useCallback(() => {
    const newNotes = [...notes].map((note) => {
      if (note.id === id) {
        return { ...note, title: newTitle || 'Без названия' };
      }

      return note;
    });

    setNotes(newNotes);
    setShowTitleInput(false);
  }, [id, newTitle, notes, setNotes, setShowTitleInput]);

  const handleCancel = useCallback(() => {
    setShowTitleInput(false);
  }, [setShowTitleInput]);

  return (
    <InputForEditing
      onChange={handleChangeTitle}
      confirmClick={saveNewTitle}
      cancelClick={handleCancel}
      defaulInputValue={title}
    />
  );
};
