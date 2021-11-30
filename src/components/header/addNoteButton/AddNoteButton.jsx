import { useState, useCallback } from 'react';

import styles from './addNoteButton.module.scss';
import { AddNoteModal } from '../addNoteModal/AddNoteModal';
import { AddNoteForm } from '../addNoteForm/AddNoteForm';

export const AddNoteButton = () => {
  const [openModal, setOpenModal] = useState(false);

  const addNoteModalOpen = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.btn} onClick={addNoteModalOpen}>
        +
      </button>
      {openModal && (
        <AddNoteModal open={openModal}>
          <AddNoteForm setOpenModal={setOpenModal} />
        </AddNoteModal>
      )}
    </div>
  );
};
