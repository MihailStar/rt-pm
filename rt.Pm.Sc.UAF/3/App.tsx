import { useRef, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editableNoteIndex, setEditableNoteIndex] = useState<number | null>(
    null
  );

  const inputElement = useRef<HTMLInputElement>(null);
  const input = (
    <input
      onBlur={() => {
        setEditableNoteIndex(null);
      }}
      onFocus={() => {
        if (editableNoteIndex === null) {
          const notesCopy = [...notes];
          notesCopy[notesCopy.length] = '';
          setNotes(notesCopy);
          setEditableNoteIndex(notesCopy.length - 1);
        }
      }}
      onChange={(e) => {
        if (editableNoteIndex === null) return;
        const notesCopy = [...notes];
        notesCopy[editableNoteIndex] = e.target.value;
        setNotes(notesCopy);
      }}
      ref={inputElement}
      value={editableNoteIndex === null ? '' : notes[editableNoteIndex]}
    />
  );

  const list = (
    <ul>
      {notes.map((text, index) => (
        <li
          key={index}
          onClick={() => {
            setEditableNoteIndex(index);
            setTimeout(() => inputElement.current?.focus(), 0);
          }}
        >
          {text}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {list}
      {input}
    </>
  );
}

export { App };
