import { ChangeEvent, useState } from 'react';

type NoteId = string;
type NoteText = string;
type NoteIndex = number;
type Note = [NoteId, NoteText];

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [textInputValue, setTextInputValue] = useState('');
  const [idInputValue, setIdInputValue] = useState('');

  function addNote(text: NoteText): Note {
    const id: NoteId = new Date().valueOf().toString();
    const note: Note = [id, text];

    setNotes([...notes, note]);

    return note;
  }

  function removeNote(id: NoteId): Note | null {
    const index: NoteIndex = notes.findIndex(([noteId]) => noteId === id);
    if (index === -1) return null;
    const notesСopy = [...notes];
    const note = notesСopy[index];

    notesСopy.splice(index, 1);
    setNotes(notesСopy);

    return note;
  }

  const items = notes.map(([id, text]) => (
    <li key={id}>
      {id} / {text}
    </li>
  ));

  function handleTextInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setTextInputValue(event.target.value);
  }

  function handleIdInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setIdInputValue(event.target.value);
  }

  function handleAddButonClick(): void {
    addNote(textInputValue);
    setTextInputValue('');
  }

  function handleRemoveButtonClick(): void {
    if (removeNote(idInputValue) !== null) {
      setIdInputValue('');
    }
  }

  return (
    <>
      <h1>notes</h1>
      {notes.length === 0 ? <p>no notes</p> : <ul>{items}</ul>}
      <div>
        <input
          onChange={handleTextInputChange}
          placeholder="enter text here"
          type="text"
          value={textInputValue}
        />
        <button onClick={handleAddButonClick} type="button">
          add note
        </button>
      </div>
      <div>
        <input
          onChange={handleIdInputChange}
          placeholder="enter id here"
          type="text"
          value={idInputValue}
        />
        <button onClick={handleRemoveButtonClick} type="button">
          remove note
        </button>
      </div>
    </>
  );
}

export { App };
