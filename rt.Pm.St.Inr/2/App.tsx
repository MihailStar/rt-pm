import { useState } from 'react';

function App() {
  const [name, setName] = useState('user1');
  const [surn, setSurn] = useState('surn1');
  const [age] = useState(30);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>age</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{surn}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="button" onClick={() => setName('xxxx')}>
          change first name
        </button>
        <button type="button" onClick={() => setSurn('yyyy')}>
          change last name
        </button>
      </div>
    </>
  );
}

export { App };
