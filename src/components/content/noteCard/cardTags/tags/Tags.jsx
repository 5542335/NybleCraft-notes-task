import { useState } from 'react';

import { EditingTag } from 'components/content/editingTag/EditingTag';
import { useNotes } from 'hooks/useNotes';

import styles from './tags.module.scss';

export const Tags = ({ tags, id }) => {
  const { notes, updateNoteById } = useNotes();
  const [selectedTag, setSelectedTag] = useState('');

  const deleteButtonImage = <img src="https://img.icons8.com/doodle/10/000000/delete-sign.png" alt="" />;

  const editTag = (tag) => () => {
    setSelectedTag(tag);
  };

  const deleteTag = (tag) => () => {
    const note = notes.find(({ id: noteId }) => id === noteId);

    note.tags.splice(note.tags.indexOf(tag), 1);
    updateNoteById(id, { tags: note.tags });
  };

  return (
    <>
      {tags.map((tag) =>
        tag === selectedTag ? (
          <EditingTag key={tag} tags={tags} setSelectedTag={setSelectedTag} tag={selectedTag} id={id} />
        ) : (
          <div key={tag} className={styles.tag}>
            <button type="button" className={styles.tagTextBtn} onClick={editTag(tag)}>
              {tag}
            </button>
            <button type="button" className={styles.tagDeleteBtn} onClick={deleteTag(tag)}>
              {deleteButtonImage}
            </button>
          </div>
        ),
      )}
    </>
  );
};
