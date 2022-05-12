import { useState } from 'react';

const initNotes = ['1', '2', '3', '4', '5'];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [editableNote, setEditableNote] = useState<number | null>(null);

  function updateNote(index: number, value: string): void {
    const notesCopy = [...notes];
    notesCopy[index] = value;
    setNotes(notesCopy);
  }

  const layoutNotes = notes.map((note, index) => (
    <p key={index} onClick={() => setEditableNote(index)}>
      {note}
    </p>
  ));

  const layoutInput = (
    <input
      value={editableNote === null ? '' : notes[editableNote]}
      onChange={(event) => {
        if (editableNote === null) return;
        updateNote(editableNote, event.target.value);
      }}
      onBlur={() => setEditableNote(null)}
      disabled={editableNote === null}
    />
  );

  return (
    <div>
      {layoutNotes}
      {layoutInput}
    </div>
  );
}

export { App };
