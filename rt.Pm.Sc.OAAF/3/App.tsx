import { nanoid } from 'nanoid';
import { ChangeEvent, useState } from 'react';

function generateId(): string {
  return nanoid();
}

interface BaseProd {
  name: string;
  catg: string;
  cost: number;
}

interface Prod extends BaseProd {
  id: ReturnType<typeof generateId>;
}

const initProds: Prod[] = [
  { id: generateId(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: generateId(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: generateId(), name: 'prod3', catg: 'catg3', cost: 300 },
];

function getInitValues(): {
  [prop in keyof BaseProd]: string;
} {
  return {
    name: '',
    catg: '',
    cost: '',
  };
}

function App() {
  const [prods, setProds] = useState(initProds);
  const [values, setValues] = useState(getInitValues());

  function addProd(dto: BaseProd): void {
    const newProd: Prod = {
      id: generateId(),
      name: dto.name,
      catg: dto.catg,
      cost: dto.cost,
    };
    setProds([...prods, newProd]);
  }

  function deleteProd(id: Prod['id']): void {
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

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    prop: keyof typeof values
  ): void {
    setValues({ ...values, [prop]: event.target.value });
  }

  const form = (
    <form>
      {Object.keys(getInitValues()).map((prop, index) => (
        <label key={index}>
          <span>{prop}</span>
          <input
            onChange={(e) => handleInputChange(e, prop as keyof BaseProd)}
            placeholder={prop}
            type="text"
            value={values[prop as keyof BaseProd]}
          />
        </label>
      ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          addProd({
            name: values.name,
            catg: values.catg,
            cost: Number.parseFloat(values.cost),
          });
          setValues(getInitValues());
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
