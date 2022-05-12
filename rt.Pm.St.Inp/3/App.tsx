import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const currentYear = new Date().getFullYear();

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;

    if (!/(?:^$|^[1-9][0-9]*$)/.test(value)) {
      return;
    }

    setValue(value);
  }

  function getYear(age: number): number {
    return currentYear - age;
  }

  return (
    <div>
      <label htmlFor="age">age:</label>
      <input
        id="age"
        inputMode="numeric"
        placeholder="number greater zero"
        value={value}
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="year">year:</label>
      <output id="year">
        {getYear(value === '' ? 0 : Number.parseInt(value)).toString()}
      </output>
    </div>
  );
}

export { App };
