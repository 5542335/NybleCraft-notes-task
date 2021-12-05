import { useState, useCallback } from 'react';

import { InputForEditing } from '../../../../shared/inputForEditing/InputForEditing';
import { EditingTag } from '../../editingTag/EditingTag';
import { useNotes } from '../../../../hooks/useNotes';
import styles from './cardTags.module.scss';

export const CardTags = ({ tags, id }) => {
  const { notes, setNotes } = useNotes();

  const [selectedTag, setSelectedTag] = useState('');
  const [showAddTagInput, setShowAddTagInput] = useState(false);

  const [tagForAdd, setTagForAdd] = useState('');

  const addHashTagInStr = useCallback(() => {
    if (tagForAdd) {
      const arrFromTagStr = tagForAdd.trim().split('');

      if (arrFromTagStr[0] !== '#') {
        arrFromTagStr.unshift('#');

        return arrFromTagStr.join('');
      }

      return arrFromTagStr.join('');
    }

    return null;
  }, [tagForAdd]);

  const editTag = (tag) => () => {
    setSelectedTag(tag);
  };

  const handleCloseBtn = useCallback(() => {
    setShowAddTagInput(false);
  }, []);

  const handleChangeTag = useCallback((e) => {
    setTagForAdd(e.target.value);
  }, []);

  const handleAddTag = useCallback(() => {
    if (addHashTagInStr()) {
      const newNotes = [...notes].map((note) => {
        if (note.id === id) {
          note.tags.unshift(addHashTagInStr());

          return note;
        }

        return note;
      });

      setNotes(newNotes);
      handleCloseBtn();
    }

    handleCloseBtn();
  }, [id, notes, setNotes, handleCloseBtn, addHashTagInStr]);

  const handleShowAddInputBtn = useCallback(() => {
    setShowAddTagInput(true);
  }, []);

  const deleteTag = (tag) => () => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        note.tags.splice(note.tags.indexOf(tag), 1);
      }

      return note;
    });

    setNotes(newNotes);
  };

  return (
    <div className={styles.tags}>
      {showAddTagInput ? (
        <InputForEditing onChange={handleChangeTag} confirmClick={handleAddTag} cancelClick={handleCloseBtn} />
      ) : (
        <button type="button" className={styles.addTagBtn} onClick={handleShowAddInputBtn}>
          +
        </button>
      )}
      {tags.map((tag) =>
        tag === selectedTag ? (
          <EditingTag setSelectedTag={setSelectedTag} tag={selectedTag} id={id} />
        ) : (
          <div className={styles.tag}>
            <button key={tag} type="button" className={styles.tagTextBtn} onClick={editTag(tag)}>
              {tag}
            </button>
            <button type="button" className={styles.tagDeleteBtn} onClick={deleteTag(tag)}>
              <img src="https://img.icons8.com/doodle/10/000000/delete-sign.png" alt="" />
            </button>
          </div>
        ),
      )}
    </div>
  );
};
