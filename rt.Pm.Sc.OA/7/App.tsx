import { useState } from 'react';

const initNotes = [
  {
    id: 'GYi9G_uC4gBF1e2SixDvu',
    prop1: 'val11',
    prop2: 'val12',
    prop3: 'val13',
  },
  {
    id: 'IWSpfBPSV3SXgRF87uO74',
    prop1: 'val21',
    prop2: 'val22',
    prop3: 'val23',
  },
  {
    id: 'JAmjRlfQT8rLTm5tG2m1L',
    prop1: 'val31',
    prop2: 'val32',
    prop3: 'val33',
  },
];

const id = 'JAmjRlfQT8rLTm5tG2m1L';
const prop = 'prop2';

function App() {
  const [notes] = useState(initNotes);
  const [displayedValue, setDisplayedValue] = useState('');

  return (
    <>
      {notes.map((note) => (
        <p key={note.id}>
          <span>{note.prop1}</span>,
          <span>{note.prop2}</span>,
          <span>{note.prop3}</span>
        </p>
      ))}
      <button
        onClick={() => {
          const note = notes.find((note) => note.id === id);
          if (note === undefined) return;
          setDisplayedValue(note[prop]);
        }}
        type="button"
      >
        update
      </button>
      <p>{displayedValue}</p>
    </>
  );
}

export { App };
