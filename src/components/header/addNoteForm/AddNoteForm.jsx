/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useNotes } from '../../../hooks/useNotes';
import styles from './addNoteForm.module.scss';
import { AutoHeightTextarea } from '../../../shared/autoHeightTextarea/AutoHeightTextarea';
import { CustomButton } from '../../../shared/customButton/CustomButton';

export const AddNoteForm = ({ setOpenModal }) => {
  const { setNotes } = useNotes();
  const [title, setTitle] = useState('');
  const [description, setSescription] = useState('');

  const changeTitle = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [setTitle],
  );

  const changeDescription = useCallback(
    (htmlDescription) => {
      setSescription(htmlDescription.target.value);
    },
    [setSescription],
  );

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  const addNote = useCallback(() => {
    const tags =
      description
        .replace(/#/g, ' #')
        .split(' ')
        .filter((item) => item.startsWith('#')) || [];

    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    setNotes((prevState) => [{ id: uuidv4(), description, tags, title }, ...prevState]);
    closeModal();
  }, [setNotes, closeModal, description, title]);

  return (
    <form className={styles.myForm} onSubmit={addNote}>
      <label htmlFor="title">Название заметки </label>
      <input type="text" id="title" onChange={changeTitle} />
      <label htmlFor="description">Описание</label>
      <AutoHeightTextarea description={description} onChange={changeDescription} />
      <div className={styles.buttons}>
        <CustomButton type="primary" htmlType="submit">
          Добавить заметку
        </CustomButton>
        <CustomButton onClick={closeModal}>Отмена</CustomButton>
      </div>
    </form>
  );
};
