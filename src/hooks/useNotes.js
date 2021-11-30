import { useContext } from 'react';

import { NoteContext } from '../context/noteContext';

export const useNotes = () => {
  const notes = useContext(NoteContext);

  return notes;
};
