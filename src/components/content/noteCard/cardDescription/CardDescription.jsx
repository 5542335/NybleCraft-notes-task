import { useCallback, useState } from 'react';

import styles from './cardDescription.module.scss';
import { EditingDescription } from '../../editingDescription/EditingDescription';

export const CardDescription = ({ description, id }) => {
  const [isEditDesciption, setIsEditDescription] = useState(false);

  const editText = useCallback(() => {
    setIsEditDescription(true);
  }, []);

  return (
    <div className={styles.description}>
      {isEditDesciption ? (
        <EditingDescription setIsEditDescription={setIsEditDescription} description={description} id={id} />
      ) : (
        <div onClick={editText}>{description}</div>
      )}
    </div>
  );
};
