import { ChangeEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setValue(+event.target.value);
  }

  const languages = ['html', 'css', 'js'];
  const inputs = languages.map((label, index) => {
    return (
      <label>
        <input
          checked={value === index}
          name="languages"
          onChange={changeHandler}
          type="radio"
          value={index}
        />
        <span>{label}</span>
      </label>
    );
  });

  return (
    <>
      {inputs}
      <p>{languages[value]}</p>
      {languages[value] === 'js' && <p>not bad</p>}
    </>
  );
}

export { App };
