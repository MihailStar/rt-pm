import { nanoid } from 'nanoid';
import { useState } from 'react';

function generateId(): string {
  return nanoid();
}

type Prod = {
  id: ReturnType<typeof generateId>;
  name: string;
  cost: number;
  desc: string;
  comm: string;
  isDescVisible: boolean;
  isCommVisible: boolean;
};

const initProds: Prod[] = [
  {
    id: generateId(),
    name: 'prod 1',
    cost: 100,
    desc: 'long description 1',
    comm: 'my super comment 1',
    isDescVisible: false,
    isCommVisible: false,
  },
  {
    id: generateId(),
    name: 'prod 2',
    cost: 200,
    desc: 'long description 2',
    comm: 'my super comment 2',
    isDescVisible: false,
    isCommVisible: false,
  },
  {
    id: generateId(),
    name: 'prod 3',
    cost: 300,
    desc: 'long description 3',
    comm: 'my super comment 3',
    isDescVisible: false,
    isCommVisible: false,
  },
];

function App() {
  const [prods, setProds] = useState(initProds);

  function toggleDescVisible(id: Prod['id']): void {
    setProds(
      prods.map((prod) =>
        prod.id === id ? { ...prod, isDescVisible: !prod.isDescVisible } : prod
      )
    );
  }

  function toggleCommVisible(id: Prod['id']): void {
    setProds(
      prods.map((prod) =>
        prod.id === id ? { ...prod, isCommVisible: !prod.isCommVisible } : prod
      )
    );
  }

  const items = prods.map((prod) => {
    const desc: JSX.Element | null = prod.isDescVisible ? (
      <span>{prod.desc}</span>
    ) : null;
    const comm: JSX.Element | null = prod.isCommVisible ? (
      <span>{prod.comm}</span>
    ) : null;

    return (
      <li key={prod.id}>
        <span>{prod.name}</span>
        <span>{prod.cost}</span>
        <button onClick={() => toggleDescVisible(prod.id)} type="button">
          desc {prod.isDescVisible ? 'hide' : 'show'}
        </button>
        {desc}
        <button onClick={() => toggleCommVisible(prod.id)} type="button">
          comm {prod.isCommVisible ? 'hide' : 'show'}
        </button>
        {comm}
      </li>
    );
  });

  return <ul>{items}</ul>;
}

export { App };
