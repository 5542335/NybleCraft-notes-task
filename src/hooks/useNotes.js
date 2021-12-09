import { useContext, useCallback } from 'react';

import { NoteContext } from '../context/noteContext';

export const useNotes = () => {
  const { notes, setNotes } = useContext(NoteContext);

  const updateNoteById = useCallback(
    (id, updatedNoteFields) => {
      const newField = notes.map((note) => {
        if (note.id === id) {
          return { ...note, ...updatedNoteFields };
        }

        return note;
      });

      setNotes(newField);
    },
    [notes, setNotes],
  );

  return { notes, setNotes, updateNoteById };
};
