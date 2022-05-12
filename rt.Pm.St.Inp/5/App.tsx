import { useState } from 'react';
import { Input } from './Input';

function App() {
  const values = [
    useState(0),
    useState(0),
    useState(0),
    useState(0),
    useState(0),
  ];

  function handleChange(index: number, value: number): void {
    const [, setValue] = values[index];

    setValue(value);
  }

  const inputs = values.map(([value], index) => (
    <Input
      key={index}
      onChange={(value) => handleChange(index, value)}
      initialValue={value}
    />
  ));

  return (
    <>
      {inputs}
      <p>{values.reduce((acc, [value]) => acc + value, 0) / values.length}</p>
    </>
  );
}

export { App };
