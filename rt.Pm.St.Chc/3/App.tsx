import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const message = isChecked ? <p>over 18</p> : <p>under 18</p>;

  return (
    <>
      <label>
        <input
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          type="checkbox"
        />
        <span>18</span>
      </label>
      <div>{message}</div>
    </>
  );
}

export { App };
