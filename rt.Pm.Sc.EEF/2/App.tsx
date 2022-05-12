import { useRef, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editableIndex, setEditableIndex] = useState<number | null>(null);

  function changeNote(index: number, text: string): void {
    if (typeof editableIndex === 'number') {
      const notesCopy = [...notes];
      notesCopy.splice(index, 1, text);
      setNotes(notesCopy);
    }
  }

  const inputElement = useRef<HTMLInputElement>(null);
  const input = (
    <input
      onBlur={() => {
        setEditableIndex(null);
      }}
      onChange={(event) => {
        if (typeof editableIndex === 'number') {
          changeNote(editableIndex, event.target.value);
        }
      }}
      ref={inputElement}
      type="text"
      value={typeof editableIndex === 'number' ? notes[editableIndex] : ''}
    />
  );

  const items = notes.map((note, index) => (
    <li key={index}>
      <span>{note}</span>
      <button
        onClick={() => {
          setEditableIndex(index);
          inputElement.current?.focus();
        }}
        type="button"
      >
        edit
      </button>
    </li>
  ));

  return (
    <>
      <ul>{items}</ul>
      {input}
    </>
  );
}

export { App };
