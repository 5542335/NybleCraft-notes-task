/* eslint-disable sort-keys-fix/sort-keys-fix */
import { useState } from 'react';

import { NoteProvider } from './context/noteContext';
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';
import styles from './App.module.scss';

const testData = [
  {
    id: 'db9c4626-ddfe-4627-9e47-0841740aaa1b',
    description: 'description1efwfewfdcewdfewvewffgsrfcwfewfwf',
    tags: ['#tags1', '#tags90', '#tag546'],
    title: 'title1353532532524242',
  },
  {
    id: 'db9t4626-ddfe-4627-9e47-0841740aaa1b',
    description: 'description2 #qwerty',
    tags: ['#tags1', '#qwerty'],
    title: 'title2',
  },
  {
    id: 'db9c4626-ddfe-7627-9e47-0841740aaa1b',
    description: 'description3',
    tags: ['#tags3', '#rtyui'],
    title: 'title3',
  },
  {
    id: 'db9c4626-ddfe-4627-9e47-0841743aaa1b',
    description: 'description4',
    tags: ['#tags4', '#rtyuu', '#rfvbgt'],
    title: 'title4',
  },
  {
    id: 'db9c4626-ddfe-4627-9e17-0841740aaa1b',
    description: 'description1efwgewgfewfdcewdfewffgsrfcwfewfwf',
    tags: ['#tags5', '#tags432', '#tag546'],
    title: 'tit34235353252342',
  },
  {
    id: 'eb9c4626-ddfe-4627-9e47-0841740aaa1b',
    description: 'description1egwgewefwfecewdfewvewffgsrfcwfewfwf',
    tags: ['#tags6', '#tags3241', '#tag546'],
    title: 'ti53552421342',
  },
  {
    id: 'db9c4626-ddfe-4627-9e42-0841740aaa1b',
    description: 'description1efwfdcewdfewvewffgsrfcwfewfwf',
    tags: ['#tags7', '#tags64547', '#ta', '#few', '#tyu'],
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
