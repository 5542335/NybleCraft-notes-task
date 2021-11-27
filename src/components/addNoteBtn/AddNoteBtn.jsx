import { useCallback, useState } from 'react';

import { CustomButton } from '../notes/shared/customButton/CustomButton';
import { AddNoteModal } from './addNoteModal/AddNoteModal';
// eslint-disable-next-line no-unused-vars
import styles from './addNoteBtn.module.scss';

export const AddNoteBtn = () => {
  const [openModal, setOpenModal] = useState(false);

  const addNoteModalOpen = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  return (
    <div>
      <button type="button" onClick={addNoteModalOpen}>
        <img src="https://img.icons8.com/fluency/60/000000/add.png" alt="" />
      </button>
      {openModal && (
        <AddNoteModal open={openModal}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque eveniet iste odio quae earum iure
            dolores vero, nulla saepe aliquid alias reprehenderit accusamus commodi numquam cupiditate temporibus
            perferendis. Soluta?
          </div>
          <div>
            <CustomButton type="primary">Добавить заметку</CustomButton>
            <CustomButton onClick={closeModal}>Отмена</CustomButton>
          </div>
        </AddNoteModal>
      )}
    </div>
  );
};
