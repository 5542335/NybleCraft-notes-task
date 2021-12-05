import { useState, useCallback } from 'react';

import { InputForEditing } from '../../../shared/inputForEditing/InputForEditing';
import { useNotes } from '../../../hooks/useNotes';

export const EditingTag = ({ setSelectedTag, tag, id, tagIndex }) => {
  const { notes, setNotes } = useNotes();
  const [editedTag, setEditedTag] = useState([]);

  const handleChangeTags = useCallback((e) => {
    setEditedTag(e.target.value);
  }, []);

  const saveNewTags = useCallback(() => {
    const newTags = notes.map((note) => {
      if (note.id === id) {
        note.tags.splice(tagIndex, 1, editedTag);

        return note;
      }

      return note;
    });

    setNotes(newTags);
    setSelectedTag('');
  }, [editedTag, id, notes, setNotes, setSelectedTag, tagIndex]);

  const handleCancel = useCallback(() => {
    setSelectedTag('');
  }, [setSelectedTag]);

  return (
    <InputForEditing
      onChange={handleChangeTags}
      confirmClick={saveNewTags}
      cancelClick={handleCancel}
      defaulInputValue={tag}
    />
  );
};
