import { useState } from 'react';

function App() {
  const cities = ['Санкт-Петербург', 'Ленинград', 'Петроград'];
  const options = cities.map((city, index) => (
    <option key={index}>{city}</option>
  ));

  const [value, setValue] = useState(cities[0]);

  return (
    <>
      <select onChange={(event) => setValue(event.target.value)} value={value}>
        {options}
      </select>
      <p>{value}</p>
    </>
  );
}

export { App };
