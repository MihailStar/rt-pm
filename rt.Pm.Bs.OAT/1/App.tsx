function App() {
  const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  ];
  const rows = users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.surn}</td>
        <td>{user.age}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <tfoot>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
        </tr>
      </tfoot>
    </table>
  );
}

export { App };
