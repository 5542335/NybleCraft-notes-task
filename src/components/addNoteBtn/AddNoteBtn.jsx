import { useCallback, useState } from 'react';

import { AddNoteModal } from './addNoteModal/AddNoteModal';
import styles from './addNoteBtn.module.scss';
import { AddNoteForm } from './addNoteForm/AddNoteForm';

export const AddNoteBtn = ({ className }) => {
  const [openModal, setOpenModal] = useState(false);

  const addNoteModalOpen = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <div className={className}>
      <button type="button" className={styles.addNoteBtn} onClick={addNoteModalOpen}>
        <img src="https://img.icons8.com/fluency/60/000000/add.png" alt="" />
      </button>
      {openModal && (
        <AddNoteModal open={openModal}>
          <AddNoteForm setOpenModal={setOpenModal} />
        </AddNoteModal>
      )}
    </div>
  );
};
