import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.scss';

function generateId(): string {
  return nanoid();
}

const initProds = [
  { id: generateId(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: generateId(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: generateId(), name: 'prod3', catg: 'catg3', cost: 300 },
];

function App() {
  const [prods, setProds] = useState(initProds);

  function deleteProd(id: string): void {
    setProds(prods.filter((prod) => prod.id !== id));
  }

  const tableHeader = (
    <tr>
      {Object.keys(initProds[0]).map((prop, propIndex) => (
        <th key={propIndex}>{prop}</th>
      ))}
      <th></th>
    </tr>
  );

  const table = (
    <table>
      <thead>{tableHeader}</thead>
      <tbody>
        {prods.map((prod) => (
          <tr key={prod.id}>
            {Object.values(prod).map((val, valIndex) => (
              <td key={valIndex}>{val}</td>
            ))}
            <td>
              <button onClick={() => deleteProd(prod.id)} type="button">
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>{tableHeader}</tfoot>
    </table>
  );

  return <>{table}</>;
}

export { App };
