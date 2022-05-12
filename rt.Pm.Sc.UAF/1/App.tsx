import { useRef, useState } from 'react';

function App() {
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  const [editableNoteIndex, setEditableNoteIndex] = useState<number | null>(
    null
  );
  const [value, setValue] = useState('');

  const note = {
    create(text: string): void {
      setNotes([...notes, text]);
    },

    read(index: number): string | null {
      if (notes[index] === undefined) return null;
      return notes[index];
    },

    update(index: number, text: string): void {
      if (notes[index] === undefined) return;
      const notesCopy = [...notes];
      notesCopy[index] = text;
      setNotes(notesCopy);
    },

    delete(index: number): void {
      if (notes[index] === undefined) return;
      const notesCopy = [...notes];
      notesCopy.splice(index, 1);
      setNotes(notesCopy);
    },
  };

  const createInputElement = useRef<HTMLInputElement>(null);
  const updateInputElement = useRef<HTMLInputElement>(null);
  let input: JSX.Element;
  if (editableNoteIndex === null) {
    input = (
      <input
        onBlur={() => {
          note.create(value);
          setValue('');
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        ref={createInputElement}
        value={value}
      />
    );
  } else {
    input = (
      <input
        onBlur={() => {
          setEditableNoteIndex(null);
        }}
        onChange={(e) => {
          note.update(editableNoteIndex, e.target.value);
        }}
        ref={updateInputElement}
        value={note.read(editableNoteIndex)!}
      />
    );
  }

  const list = (
    <ul>
      {notes.map((text, index) => (
        <li
          key={index}
          onClick={() => {
            setEditableNoteIndex(index);
            createInputElement.current?.focus();
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
