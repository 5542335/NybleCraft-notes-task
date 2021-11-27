import React, { useCallback, useEffect, useRef, useState } from 'react';

const defaultStyle = {
  backgroundColor: 'MediumAquamarine',
  display: 'block',
  overflow: 'hidden',
  padding: '5px',
  resize: 'none',
  width: '100%',
};

export const AutoHeightTextarea = ({ style = defaultStyle, description }) => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState('');

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;

    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [currentValue]);

  const editDescription = useCallback((e) => {
    setCurrentValue(e.target.value);
  }, []);

  return <textarea ref={textareaRef} style={style} defaultValue={description} onChange={editDescription} />;
};
