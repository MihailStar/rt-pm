import { useRef, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editableNoteIndex, setEditableNoteIndex] = useState<number | null>(
    null
  );
  const [value, setValue] = useState('');

  const inputElement = useRef<HTMLInputElement>(null);
  const input = (
    <input
      onBlur={() => {
        if (editableNoteIndex === null) {
          const notesCopy = [...notes];
          notesCopy[notesCopy.length] = value;
          setNotes(notesCopy);
        } else {
          setEditableNoteIndex(null);
        }
        setValue('');
      }}
      onChange={(e) => {
        setValue(e.target.value);
        if (editableNoteIndex === null) return;
        const notesCopy = [...notes];
        notesCopy[editableNoteIndex] = e.target.value;
        setNotes(notesCopy);
      }}
      ref={inputElement}
      value={value}
    />
  );

  const list = (
    <ul>
      {notes.map((text, index) => (
        <li
          key={index}
          onClick={() => {
            setEditableNoteIndex(index);
            setValue(notes[index]);
            inputElement.current?.focus();
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
