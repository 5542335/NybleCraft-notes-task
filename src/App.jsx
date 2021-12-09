import { useState } from 'react';

import { NoteProvider } from './context/noteContext';
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import styles from './App.module.scss';
import data from './data.json';

export const App = () => {
  const [notes, setNotes] = useState(data);

  return (
    <NoteProvider value={{ notes, setNotes }}>
      <div className={styles.appContainer}>
        <Header />
        <Content />
      </div>
    </NoteProvider>
  );
};
