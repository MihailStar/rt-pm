import { useState } from 'react';

function App() {
  const [value, setValue] = useState('0');
  const [result, setResult] = useState(0);

  return (
    <>
      <label htmlFor="from">number: </label>
      <input
        id="from"
        onChange={(event) => setValue(event.target.value)}
        onBlur={() => setResult([...value].reduce((a, d) => a + +d, 0))}
        placeholder="number"
        type="number"
        value={value}
      />
      <p>{result}</p>
    </>
  );
}

export { App };
