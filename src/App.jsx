import { useState } from 'react';

import { NoteContainer } from './components/notes/noteContainer/NoteContainer';
import { HashTags } from './components/hashTags/HashTags';
import { NoteProvider } from './context/noteContext';
import { Header } from './components/header/Header';

import './App.scss';

const testData = [
  {
    description: 'description1efwfewfdcewdfewvewffgsrfcwfewfwf',
    tags: ['#tags1', '#tags1', '#tag546'],
    title: 'title134235353253252421342',
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
];

export const App = () => {
  const [notes, setNotes] = useState(testData);
  const [selectedTag, setSelectedTag] = useState();

  return (
    <NoteProvider value={{ notes, setNotes }}>
      <div className="app-container">
        <Header />
        <HashTags className="hash-tags-container" selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <NoteContainer className="note-container" selectedTag={selectedTag} />
      </div>
    </NoteProvider>
  );
};
