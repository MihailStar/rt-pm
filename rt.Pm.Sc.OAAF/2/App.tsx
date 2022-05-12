import { nanoid } from 'nanoid';
import { useState } from 'react';

function generateId(): string {
  return nanoid();
}

type Prod = {
  id: ReturnType<typeof generateId>;
  name: string;
  catg: string;
  cost: number;
};

const initProds: Prod[] = [
  { id: generateId(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: generateId(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: generateId(), name: 'prod3', catg: 'catg3', cost: 300 },
];

function App() {
  const [name, setName] = useState('');
  const [catg, setCatg] = useState('');
  const [cost, setCost] = useState('');
  const [prods, setProds] = useState(initProds);

  function addProd(): void {
    const newProd: Prod = {
      id: generateId(),
      name: name,
      catg: catg,
      cost: Number.parseFloat(cost),
    };
    setProds([...prods, newProd]);
  }

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

  const form = (
    <form>
      <label>
        <span>name</span>
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          type="text"
          value={name}
        />
      </label>
      <label>
        <span>catg</span>
        <input
          onChange={(event) => setCatg(event.target.value)}
          placeholder="catg"
          type="text"
          value={catg}
        />
      </label>
      <label>
        <span>cost</span>
        <input
          onChange={(event) => setCost(event.target.value)}
          placeholder="cost"
          type="number"
          value={cost}
        />
      </label>
      <button
        onClick={(event) => {
          event.preventDefault();
          addProd();
          setName('');
          setCatg('');
          setCost('');
        }}
      >
        add
      </button>
    </form>
  );

  return (
    <>
      {table}
      {form}
    </>
  );
}

export { App };
