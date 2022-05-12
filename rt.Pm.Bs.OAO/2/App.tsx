function App() {
  const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  ];
  const items = users.map((user) => (
    <li key={user.id}>
      <span>{user.id}</span>
      <ul>
        <li>{user.name}</li>
        <li>{user.surn}</li>
        <li>{user.age}</li>
      </ul>
    </li>
  ));

  return <ul>{items}</ul>;
}

export { App };
