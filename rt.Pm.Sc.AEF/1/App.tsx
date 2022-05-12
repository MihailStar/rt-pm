import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);

  return (
    <>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <input
        onBlur={() => setNotes([...notes, value])}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
      />
    </>
  );
}

export { App };
