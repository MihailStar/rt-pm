import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function handleChange(): void {
    setIsChecked(!isChecked);
  }

  function handleClick(): void {
    setIsShown(!isShown);
  }

  return (
    <>
      <input checked={isChecked} onChange={handleChange} type="checkbox" />
      <button type="button" onClick={handleClick}>
        {!isShown ? 'show' : 'hide'} message
      </button>
      <p style={{ visibility: isShown ? 'visible' : 'hidden' }}>
        {isChecked ? 'hello' : 'goodbye'}
      </p>
    </>
  );
}

export { App };
