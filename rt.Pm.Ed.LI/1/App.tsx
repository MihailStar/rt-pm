import { useState } from 'react';

type Note = { text: string; isEdit: boolean };

const initNotes: Note[] = [
  { text: 'note 1', isEdit: false },
  { text: 'note 2', isEdit: false },
  { text: 'note 3', isEdit: false },
];

function App() {
  const [notes, setNotes] = useState<Note[]>(initNotes);

  function changeNote(index: number, data: Partial<Note>): void {
    const notesCopy = [...notes];
    notesCopy[index] = { ...notesCopy[index], ...data };
    setNotes(notesCopy);
  }

  function startEdit(index: number): void {
    changeNote(index, { isEdit: true });
  }

  function endEdit(index: number): void {
    changeNote(index, { isEdit: false });
  }

  const items = notes.map((note, index) => {
    const element = note.isEdit ? (
      <input
        onBlur={() => endEdit(index)}
        onChange={(event) => changeNote(index, { text: event.target.value })}
        value={note.text}
      />
    ) : (
      <span onClick={() => startEdit(index)}>{note.text}</span>
    );
    const button = (
      <button
        onClick={() => (note.isEdit ? endEdit(index) : startEdit(index))}
        type="button"
      >
        {note.isEdit ? 'display mode' : 'edit mode'}
      </button>
    );

    return (
      <li key={index}>
        {element} {button}
      </li>
    );
  });

  return <ul>{items}</ul>;
}

export { App };
