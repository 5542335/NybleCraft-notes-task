import { useState } from 'react';

import { HashTags } from './hashTags/HashTags';
import { NoteContainer } from './noteContainer/NoteContainer';
// import styles from './content.module.scss';

export const Content = () => {
  const [selectedTag, setSelectedTag] = useState();

  return (
    <>
      {/* <div className={styles.contentContainer}> */}
      <HashTags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <NoteContainer selectedTag={selectedTag} />
      {/* </div> */}
    </>
  );
};
