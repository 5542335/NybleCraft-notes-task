import { useState, useCallback } from 'react';

import { InputForEditing } from '../../../shared/inputForEditing/InputForEditing';
import { useNotes } from '../../../hooks/useNotes';

export const EditingTag = ({ setSelectedTag, tag, id, tags }) => {
  const { updateNoteById } = useNotes();
  const [editedTag, setEditedTag] = useState([]);

  const handleChangeTags = useCallback((e) => {
    setEditedTag(e.target.value);
  }, []);

  const saveNewTags = useCallback(() => {
    const tagsCopy = [...tags];
    const tagIndex = tags.indexOf(tag);

    tagsCopy[tagIndex] = editedTag;

    updateNoteById(id, { tags: tagsCopy });
    setSelectedTag('');
  }, [editedTag, id, setSelectedTag, tag, tags, updateNoteById]);

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
