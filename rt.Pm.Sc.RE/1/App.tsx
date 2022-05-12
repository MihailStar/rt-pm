import { useState } from 'react';

function App() {
  const [letters, setLetters] = useState(['a', 'b', 'c', 'd', 'e']);

  function removeLetter(index: number): void {
    const lettersCopy = [...letters];

    lettersCopy.splice(index, 1);
    setLetters(lettersCopy);
  }

  const items = letters.map((letter, index) => (
    <li key={index}>
      <span>{letter}</span>
      <button type="button" onClick={() => removeLetter(index)}>
        remove
      </button>
    </li>
  ));

  return (
    <>
      <ul>{items}</ul>
    </>
  );
}

export { App };
