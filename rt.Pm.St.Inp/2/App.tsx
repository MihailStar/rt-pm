import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState('text');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return (
    <div>
      <input value={value} onChange={handleInputChange} />
      <p>{value.length}</p>
    </div>
  );
}

export { App };
