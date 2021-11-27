import React from 'react';

import styles from './customButton.module.scss';

export const CustomButton = ({ htmlType = 'button', onClick, children, type }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={htmlType} onClick={onClick} className={`${styles.button} ${styles[type]}`}>
    {children}
  </button>
);
