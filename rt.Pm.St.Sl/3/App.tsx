import { useState } from 'react';

function App() {
  const ages = ['0-12', '13-17', '18-25', '26-∞'];
  const messages = [
    'from 0 to 12 years old',
    'from 13 to 17 years old',
    'from 18 to 25 years old',
    'over 26 years old',
  ];
  const options = ages.map((city, index) => (
    <option key={index} value={index}>
      {city}
    </option>
  ));

  const [value, setValue] = useState(0);

  return (
    <>
      <select
        onChange={(event) => setValue(Number(event.target.value))}
        value={value}
      >
        {options}
      </select>
      <p>{messages[value]}</p>
    </>
  );
}

export { App };
