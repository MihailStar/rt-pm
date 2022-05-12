import { useRef, useState } from "react";

const initNotes = ["1", "2", "3", "4", "5"];

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [editableNote, setEditableNote] = useState<number | null>(null);

  function updateNote(index: number, value: string): void {
    const notesCopy = [...notes];
    notesCopy[index] = value;
    setNotes(notesCopy);
  }

  const inputElement = useRef<HTMLInputElement>(null);
  const InputLayout = (
    <input
      value={editableNote === null ? "" : notes[editableNote]}
      onChange={(event) => {
        if (editableNote === null) return;
        updateNote(editableNote, event.target.value);
      }}
      onBlur={() => {
        setEditableNote(null);
      }}
      disabled={editableNote === null}
      ref={inputElement}
    />
  );

  const noteslayout = notes.map((note, index) => (
    <p
      key={index}
      onClick={() => {
        setEditableNote(index);
        setTimeout(() => inputElement.current?.focus(), 0);
      }}
    >
      {note}
    </p>
  ));

  return (
    <div>
      {noteslayout}
      {InputLayout}
    </div>
  );
}

export { App };
