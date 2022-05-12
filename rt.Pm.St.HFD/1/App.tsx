import { useState } from 'react';

function App() {
  const [value1, setValue1] = useState('0');
  const [value2, setValue2] = useState('0');
  const [result, setResult] = useState('0');

  return (
    <>
      <input
        onChange={(event) => setValue1(event.target.value)}
        placeholder="number"
        type="number"
        value={value1}
      />
      <input
        onChange={(event) => setValue2(event.target.value)}
        placeholder="number"
        type="number"
        value={value2}
      />
      <button
        type="button"
        onClick={() =>
          setResult(
            (Number.parseInt(value1) + Number.parseInt(value2)).toString()
          )
        }
      >
        add
      </button>
      <button
        type="button"
        onClick={() =>
          setResult(
            (Number.parseInt(value1) * Number.parseInt(value2)).toString()
          )
        }
      >
        multiply
      </button>
      <p>result: {result}</p>
    </>
  );
}

export { App };
