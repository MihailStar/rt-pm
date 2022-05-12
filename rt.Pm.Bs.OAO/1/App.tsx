function App() {
  const users = [
    { name: 'user1', surn: 'surn1', age: 30 },
    { name: 'user2', surn: 'surn2', age: 31 },
    { name: 'user3', surn: 'surn3', age: 32 },
  ];
  const items = users.map((user, index) => (
    <li key={index}>
      <span>{index}</span>
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
