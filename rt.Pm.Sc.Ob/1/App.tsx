import { useState } from 'react';

function App() {
  const [obj, setObj] = useState({
    prop1: 0,
    prop2: 0,
    prop3: 0,
  });

  const list = (
    <ul>
      {Object.entries(obj).map(([prop, val], index) => (
        <li key={index} onClick={() => {}}>
          <button
            onClick={() => {
              setObj({
                ...obj,
                ...{ [prop]: obj[prop as keyof typeof obj] - 1 },
              });
            }}
            type="button"
          >
            decr
          </button>
          <span>{val}</span>
          <button
            onClick={() => {
              setObj({
                ...obj,
                ...{ [prop]: obj[prop as keyof typeof obj] + 1 },
              });
            }}
            type="button"
          >
            incr
          </button>
        </li>
      ))}
    </ul>
  );

  return <>{list}</>;
}

export { App };
