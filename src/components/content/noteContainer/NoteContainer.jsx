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
      {filteredNotes.map(({ title, description, tags }, index) => (
        <NoteCard
          key={title}
          tags={tags}
          title={title}
          description={description}
          deleteCard={deleteCard(title)}
          index={index}
        />
      ))}
    </div>
  );
};
