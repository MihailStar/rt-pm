function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const items = arr.map((elem, index) => <li key={index}>{elem}</li>);

  return <ul>{items}</ul>;
}

export { App };
