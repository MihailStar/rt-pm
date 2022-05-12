import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <select
        defaultValue="default"
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="default" disabled={true}>
          select option
        </option>
        <option value="1">option1</option>
        <option value="2">option2</option>
        <option value="3">option3</option>
      </select>

      <p>value: {value}</p>
    </>
  );
}

export { App };
