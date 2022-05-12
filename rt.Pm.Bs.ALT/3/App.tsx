function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const items = [];

  for (const elem of arr) {
    items.push(<li>{elem}</li>);
  }

  return <ul>{items}</ul>;
}

export { App };
