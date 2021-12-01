import { useState } from 'react';

import { NoteProvider } from './context/noteContext';
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import styles from './App.module.scss';

const testData = [
  {
    description: 'description1efwfewfdcewdfewvewffgsrfcwfewfwf',
    tags: ['#tags1', '#tags1', '#tag546'],
    title: 'title1353532532524242',
  },
  {
    description: 'description2',
    tags: ['#tags1', '#qwerty'],
    title: 'title2',
  },
  {
    description: 'description3',
    tags: ['#tags3', '#rtyui'],
    title: 'title3',
  },
  {
    description: 'description4',
    tags: ['#tags4', '#rtyuu', '#rfvbgt'],
    title: 'title4',
  },
  {
    description: 'description1efwgewgfewfdcewdfewffgsrfcwfewfwf',
    tags: ['#tags5', '#tags432', '#tag546'],
    title: 'tit34235353252342',
  },
  {
    description: 'description1egwgewefwfecewdfewvewffgsrfcwfewfwf',
    tags: ['#tags6', '#tags3241', '#tag546'],
    title: 'ti53552421342',
  },
  {
    description: 'description1efwfdcewdfewvewffgsrfcwfewfwf',
    tags: ['#tags7', '#tags64547', '#ta'],
    title: 'titl2353253221342',
  },
];

export const App = () => {
  const [notes, setNotes] = useState(testData);

  return (
    <NoteProvider value={{ notes, setNotes }}>
      <div className={styles.appContainer}>
        <Header />
        <Content />
      </div>
    </NoteProvider>
  );
};
