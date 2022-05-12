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

  function editNote(id: NoteId, text: NoteText): Note | null {
    const index: NoteIndex = notes.findIndex(([noteId]) => noteId === id);
    if (index === -1) return null;
    const notesСopy = [...notes];
    const note: Note = [notesСopy[index][0], text];

    notesСopy[index] = note;
    setNotes(notesСopy);

    return note;
  }

  function removeNote(id: NoteId): Note | null {
    const index: NoteIndex = notes.findIndex(([noteId]) => noteId === id);
    if (index === -1) return null;
    const notesСopy = [...notes];
    const note: Note = notesСopy[index];

    notesСopy.splice(index, 1);
    setNotes(notesСopy);

    return note;
  }

  const tableRows = notes.map(([id, text]) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{text}</td>
      <td>
        <button
          onClick={() => {
            removeNote(id);
          }}
          type="button"
        >
          remove
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            editNote(id, 'edited');
          }}
          type="button"
        >
          edit
        </button>
      </td>
    </tr>
  ));
  const table = (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>text</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
      <tfoot>
        <tr>
          <th>id</th>
          <th>text</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );

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
      <div>{notes.length === 0 ? <p>no notes</p> : <>{table}</>}</div>
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
