import { nanoid } from 'nanoid';
import { useState } from 'react';

function generateId(): string {
  return nanoid();
}

type BaseProd = {
  name: string;
  catg: string;
  cost: number;
};

type Prod = {
  id: ReturnType<typeof generateId>;
} & BaseProd;

const KEYS: readonly Exclude<keyof BaseProd, ''>[] = ['name', 'catg', 'cost'];

const initProds: Prod[] = [
  { id: generateId(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: generateId(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: generateId(), name: 'prod3', catg: 'catg3', cost: 300 },
];

const initValues: { [prop in typeof KEYS[number]]: string } = KEYS.reduce(
  (result, prop) => {
    result[prop] = '';
    return result;
  },
  {} as { [prop in typeof KEYS[number]]: '' }
);

function App() {
  const [prods, setProds] = useState(initProds);
  const [values, setValues] = useState(initValues);
  const [prodIdEdited, setProdIdEdited] = useState<Prod['id'] | null>(null);

  function createProd({ name, catg, cost }: BaseProd): void {
    setProds([...prods, { id: generateId(), name, catg, cost }]);
  }

  function readProd(id: Prod['id']): Prod | null {
    return prods.find((prod) => prod.id === id) ?? null;
  }

  function updateProd(id: Prod['id'], fields: Partial<BaseProd>): void {
    setProds(
      prods.map((prod) => (prod.id === id ? { ...prod, ...fields } : prod))
    );
  }

  function deleteProd(id: Prod['id']): void {
    setProds(prods.filter((prod) => prod.id !== id));
  }

  const tableHeader = (
    <tr>
      {KEYS.map((prop, index) => (
        <th key={index}>{prop}</th>
      ))}
      <th></th>
      <th></th>
    </tr>
  );

  const table = (
    <table>
      <thead>{tableHeader}</thead>
      <tbody>
        {prods.map((prod) => (
          <tr key={prod.id}>
            {KEYS.map((prop, index) => (
              <td key={index}>{prod[prop]}</td>
            ))}
            <td>
              <button
                disabled={prod.id === prodIdEdited}
                onClick={() => setProdIdEdited(prod.id)}
                type="button"
              >
                update
              </button>
            </td>
            <td>
              <button
                disabled={prod.id === prodIdEdited}
                onClick={() => deleteProd(prod.id)}
                type="button"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>{tableHeader}</tfoot>
    </table>
  );

  const createForm = (
    <form>
      {KEYS.map((prop, index) => (
        <label key={index}>
          <span>{prop}</span>
          <input
            onChange={(event) => {
              setValues({ ...values, [prop]: event.target.value });
            }}
            placeholder={prop}
            type="text"
            value={values[prop]}
          />
        </label>
      ))}
      <button
        onClick={(event) => {
          event.preventDefault();
          createProd({
            name: values.name,
            catg: values.catg,
            cost: Number.parseFloat(values.cost),
          });
          setValues(initValues);
        }}
      >
        create
      </button>
    </form>
  );

  const updateForm = (
    <form>
      {KEYS.map((prop, index) => (
        <label key={index}>
          <span>{prop}</span>
          <input
            onChange={(event) => {
              if (prodIdEdited === null) return;
              updateProd(prodIdEdited, {
                [prop]:
                  prop === 'cost'
                    ? Number.parseFloat(event.target.value)
                    : event.target.value,
              });
            }}
            placeholder={prop}
            type="text"
            value={prodIdEdited === null ? '' : readProd(prodIdEdited)![prop]}
          />
        </label>
      ))}
      <button
        onClick={(event) => {
          event.preventDefault();
          setProdIdEdited(null);
        }}
        type="submit"
      >
        update
      </button>
    </form>
  );

  return (
    <>
      {table}
      {prodIdEdited === null ? createForm : updateForm}
    </>
  );
}

export { App };
