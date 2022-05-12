import { useState } from 'react';

function getDividers(number: number): number[] {
  const result = [];

  for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
      result.push(index);
    }
  }

  return result;
}

function App() {
  const [value, setValue] = useState('1');
  const [result, setResult] = useState([1]);

  return (
    <>
      <label htmlFor="from">number: </label>
      <input
        id="from"
        onChange={(event) => setValue(event.target.value)}
        onBlur={() => setResult(getDividers(Number.parseInt(value)))}
        placeholder="number"
        type="number"
        value={value}
      />
      <p>dividers: {result.join(', ')}</p>
    </>
  );
}

export { App };
