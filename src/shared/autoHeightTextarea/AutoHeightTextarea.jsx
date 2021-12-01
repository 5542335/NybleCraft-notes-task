import React, { useCallback, useEffect, useRef, useState } from 'react';

const defaultStyle = {
  '&:hover': {
    border: '2px solid teal',
  },
  backgroundColor: 'WhiteSmoke',
  border: '1px solid teal',
  boxSizing: 'border-box',
  display: 'block',
  overflow: 'hidden',
  padding: '5px',
  resize: 'none',
  width: '100%',
};

export const AutoHeightTextarea = ({ style = defaultStyle, description = '', onChange }) => {
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

  return <textarea ref={textareaRef} style={style} defaultValue={description} onChange={editDescription} />;
};
