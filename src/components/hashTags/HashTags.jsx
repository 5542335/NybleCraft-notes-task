import { useCallback, useMemo, useState } from 'react';

import { useNotes } from '../../hooks/useNotes';
import { Chip } from '../notes/shared/chip/Chip';
import styles from './hashTags.module.scss';

export const HashTags = ({ className, selectedTag, setSelectedTag }) => {
  const { notes } = useNotes();
  const [allNotesTag, setAllNotesTag] = useState(true);

  const uniqueTags = useMemo(() => {
    const allTags = notes.reduce((acc, { tags }) => [...acc, ...tags], []);

    return [...new Set(allTags)];
  }, [notes]);

  const sortNotesByTag = (tag) => () => {
    setSelectedTag(tag);
    setAllNotesTag(false);
  };

  const handleAllNotesTag = useCallback(() => {
    setAllNotesTag(true);
    setSelectedTag();
  }, [setSelectedTag]);

  return (
    <div className={`${styles.container} ${className}`}>
      {!!uniqueTags.length && (
        <Chip onClick={handleAllNotesTag} className={`${allNotesTag && `${styles.selected}`}`}>
          Все
        </Chip>
      )}
      {uniqueTags.map((tag) => (
        <Chip key={tag} onClick={sortNotesByTag(tag)} className={`${selectedTag === tag ? `${styles.selected}` : ''}`}>
          {tag}
        </Chip>
      ))}
    </div>
  );
};
