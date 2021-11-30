import React from 'react';

import styles from './addNoteModal.module.scss';

export const AddNoteModal = ({ open, children }) => (
  <div className={open ? `${styles.modal} ${styles.open}` : `${styles.modal}`}>
    <div className={open ? `${styles.modalContent}` : `${styles.modalContent} ${styles.open}`}>{children}</div>
  </div>
);
