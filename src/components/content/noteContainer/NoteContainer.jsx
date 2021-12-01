import { useMemo } from 'react';

import { useNotes } from '../../../hooks/useNotes';
import { NoteCard } from '../noteCard/NoteCard';
import styles from './noteContainer.module.scss';

export const NoteContainer = ({ selectedTag }) => {
  const { notes, setNotes } = useNotes();

  const deleteCard = (title) => () => {
    const newNotes = [...notes].filter((note) => note.title !== title);

    setNotes(newNotes);
  };

  const filteredNotes = useMemo(
    () => notes.filter(({ tags }) => !selectedTag || tags.includes(selectedTag)),
    [notes, selectedTag],
  );

  return (
    <div className={styles.container}>
      {filteredNotes.map(({ title, description, tags, id }) => (
        <NoteCard key={id} tags={tags} title={title} id={id} description={description} deleteCard={deleteCard(title)} />
      ))}
    </div>
  );
};
