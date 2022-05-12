import { ChangeEvent, useState } from 'react';

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [value, setValue] = useState('');

  function addNote(note: string): void {
    setNotes([...notes, note]);
  }

  const items = notes.map((note, index) => <li key={index}>{note}</li>);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleClick(): void {
    addNote(value);
  }

  return (
    <>
      <h1>notes</h1>
      {notes.length === 0 ? <p>no notes</p> : <ul>{items}</ul>}
      <input
        onChange={handleChange}
        placeholder="enter note text here"
        type="text"
        value={value}
      />
      <button onClick={handleClick} type="button">
        add note
      </button>
    </>
  );
}

export { App };
