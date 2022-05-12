import { useState } from 'react';

const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

/**
 * @param from dateString
 * @param to dateString
 * @example getDays('2025-12-31', '2025-12-31'); // -> 0
 */
function getDays(from: string, to: string): number {
  return (
    new Date(new Date(to).valueOf() - new Date(from).valueOf()).valueOf() /
    MILLISECONDS_IN_DAY
  );
}

function App() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [value1, setValue1] = useState(currentDate);
  const [value2, setValue2] = useState(currentDate);
  const [result, setResult] = useState(getDays(value1, value2));

  return (
    <>
      <label htmlFor="from">from: </label>
      <input
        id="from"
        onChange={(event) => setValue1(event.target.value)}
        type="text"
        value={value1}
      />
      <label htmlFor="to">to: </label>
      <input
        id="to"
        onChange={(event) => setValue2(event.target.value)}
        type="text"
        value={value2}
      />
      <button onClick={() => setResult(getDays(value1, value2))} type="button">
        get days
      </button>
      <p>days: {result}</p>
    </>
  );
}

export { App };
