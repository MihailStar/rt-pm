import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <label>
        <input
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          type="checkbox"
        />
        <span>checkbox</span>
      </label>
      {isChecked && <p>paragraph</p>}
    </>
  );
}

export { App };
