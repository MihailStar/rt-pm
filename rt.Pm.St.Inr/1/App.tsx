import { useState } from 'react';

function App() {
  const [name] = useState('user1');
  const [surn] = useState('surn1');
  const [age] = useState(30);

  return (
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
  );
}

export { App };
