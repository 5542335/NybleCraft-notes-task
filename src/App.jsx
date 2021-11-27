import { NoteContainer } from './components/notes/noteContainer/NoteContainer';
import { NoteCard } from './components/notes/noteCard/NoteCard';

import './App.scss';

const testData = [
  {
    description: 'description1efwfewfdcewdfewvewffgsrfcwfewfwfgw',
    tags: 'tags1',
    title: 'title134235353253252421342',
  },
  {
    description: 'description2',
    tags: 'tags2',
    title: 'title2',
  },
  {
    description: 'description3',
    tags: 'tags3',
    title: 'title3',
  },
];

export const App = () => (
  <div className="app-container">
    <NoteContainer>
      {testData.map(({ title, description, tags }) => (
        <NoteCard tags={tags} title={title} description={description} />
      ))}
    </NoteContainer>
  </div>
);
