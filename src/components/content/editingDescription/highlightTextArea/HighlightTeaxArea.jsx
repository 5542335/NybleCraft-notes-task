import { useCallback, useMemo } from 'react';
import ContentEditable from 'react-contenteditable';

import styles from './highlightTextArea.module.scss';

export const HighlightTextArea = ({ text, onChange }) => {
  const htmlDescription = useMemo(() => text.replace(/#\S+/g, (hash) => `<mark>${hash}</mark>`), [text]);

  const handleChange = useCallback(
    (e) => {
      onChange(e.currentTarget.innerText);
      console.log(e.currentTarget.innerText);
    },
    [onChange],
  );

  return (
    <ContentEditable
      html={htmlDescription}
      onChange={handleChange}
      defaultValue={text}
      className={styles.highlightInput}
    />
  );
};
