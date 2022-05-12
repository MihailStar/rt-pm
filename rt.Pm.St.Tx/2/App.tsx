import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState('0');
  const [result, setResult] = useState(0);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    const { value } = event.target;

    setValue(value);
    setResult(value.split('\n').reduce((a, d) => a + +d, 0));
  }

  return (
    <>
      <textarea value={value} onChange={handleChange} />
      <p>{result.toString()}</p>
    </>
  );
}

export { App };
