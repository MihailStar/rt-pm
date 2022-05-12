import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState('1');

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  const inputs = Array.from({ length: 3 }).map((_, index) => {
    const strindex = (index + 1).toString();

    return (
      <label>
        <input
          checked={value === strindex}
          name="radio"
          onChange={changeHandler}
          type="radio"
          value={strindex}
        />
        <span>{strindex}</span>
      </label>
    );
  });

  return (
    <>
      {inputs}
      <p>{value}</p>
    </>
  );
}

export { App };
