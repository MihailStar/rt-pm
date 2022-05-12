import { ChangeEvent, useState } from 'react';

function App() {
  const [value1, setValue1] = useState('text');
  const [value2, setValue2] = useState('text');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    callback: (value: string) => void
  ): void {
    callback(event.target.value);
  }

  return (
    <div>
      <input value={value1} onChange={(e) => handleInputChange(e, setValue1)} />
      <p>{value1}</p>
      <input value={value2} onChange={(e) => handleInputChange(e, setValue2)} />
      <p>{value2}</p>
    </div>
  );
}

export { App };
