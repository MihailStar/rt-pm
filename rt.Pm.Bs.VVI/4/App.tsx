/** @returns `<div>result: john smit</div>` */
function App() {
  const name = 'john';
  const surname = 'smit';

  return <div>result: {name + ' ' + surname}</div>;
}

export { App };
