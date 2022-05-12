import { useState } from 'react';

function App() {
  const [value, setValue] = useState('Санкт-Петербург');

  return (
    <>
      <select
        onChange={(event) => setValue(event.target.value)}
        value={value}
      >
        <option>Санкт-Петербург</option>
        <option>Ленинград</option>
        <option>Петроград</option>
      </select>
      <p>{value}</p>
    </>
  );
}

export { App };
