import { useCallback, useState } from 'react';

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
    (e) => {
      setSescription(e.target.value);
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

    setNotes((prevState) => [{ description, tags, title }, ...prevState]);
    closeModal();
  }, [setNotes, closeModal, description, title]);

  return (
    <form className={styles.formContainer} onSubmit={addNote}>
      <div className={styles.inputTitle}>
        <input type="text" placeholder="Название заметки" onChange={changeTitle} />
      </div>
      <div className={styles.inputDescription}>
        <AutoHeightTextarea description={description} onChange={changeDescription} />
      </div>
      <div className={styles.buttons}>
        <CustomButton type="primary" htmlType="submit">
          Добавить заметку
        </CustomButton>
        <CustomButton onClick={closeModal}>Отмена</CustomButton>
      </div>
    </form>
  );
};
