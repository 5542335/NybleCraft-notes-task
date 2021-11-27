import { useCallback } from 'react';

import { AutoHeightTextarea } from './AutoHeightTextarea';
import { CustomButton } from '../shared/customButton/CustomButton';
import styles from './editingDescription.module.scss';

export const EditingDescription = ({ setEditDescription, description }) => {
  const handleCancel = useCallback(() => {
    setEditDescription(false);
  }, [setEditDescription]);

  return (
    <div className={styles.container}>
      <div>
        <AutoHeightTextarea description={description} />
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton onClick={handleCancel}>Отмена</CustomButton>
        <CustomButton type="primary">Изменить</CustomButton>
      </div>
    </div>
  );
};
