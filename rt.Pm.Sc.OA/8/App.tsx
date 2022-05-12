import { nanoid } from 'nanoid';
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
  const tableHeader = (
    <tr>
      {Object.keys(initProds[0]).map((prop, propIndex) => (
        <th key={propIndex}>{prop}</th>
      ))}
    </tr>
  );

  const table = (
    <table>
      <thead>{tableHeader}</thead>
      <tbody>
        {initProds.map((prod, prodIndex) => (
          <tr key={prodIndex}>
            {Object.values(prod).map((val, valIndex) => (
              <td key={valIndex}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>{tableHeader}</tfoot>
    </table>
  );

  return <>{table}</>;
}

export { App };
