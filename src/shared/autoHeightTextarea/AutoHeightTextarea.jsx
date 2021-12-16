import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './AutoHeightTextarea.module.scss';

export const AutoHeightTextarea = ({ description = '', onChange }) => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;

    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [currentValue]);

  const editDescription = useCallback(
    (e) => {
      setCurrentValue(e.target.value);

      onChange?.(e);
    },
    [onChange],
  );

  return (
    <textarea
      className={styles.autoHeightTextarea}
      ref={textareaRef}
      defaultValue={description}
      onChange={editDescription}
    />
  );
};

// const HOC = (Component) => (props) => {
//   useEffect(() => {
//     fetch();
//   }, []);

//   return <Component {...props} />;
// };

// const Child = () => <AutoHeightTextarea />;

// const Parent = () => {
//   const WithUseEffect = HOC(Child, {});

//   return <WithUseEffect />;
// };
