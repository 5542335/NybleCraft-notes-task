import { NoteContainer } from './components/notes/noteContainer/NoteContainer';
import { NoteCard } from './components/notes/noteCard/NoteCard';
import { AddNoteBtn } from './components/addNoteBtn/AddNoteBtn';
import { Header } from './components/header/Header';

import './App.scss';

const testData = [
  {
    description: 'description1efwfewfdcewdfewvewffgsrfcwfewfwfgw',
    tags: ['tags1', 'tag546'],
    title: 'title134235353253252421342',
  },
  {
    description: 'description2',
    tags: ['tags2', 'qwerty'],
    title: 'title2',
  },
  {
    description: 'description3',
    tags: ['tags3', 'rtyui'],
    title: 'title3',
  },
];

export const App = () => (
  <div className="app-container">
    <div className="header-container">
      <Header testData={testData} />
    </div>
    <div className="add-note-btn">
      <AddNoteBtn />
    </div>
    <div className="note-container">
      <NoteContainer>
        {testData.map(({ title, description, tags }) => (
          <NoteCard key={title} tags={tags} title={title} description={description} />
        ))}
      </NoteContainer>
    </div>
  </div>
);
