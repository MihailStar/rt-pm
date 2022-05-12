function App() {
  const getDigitsSum = (n: number): number =>
    [...n.toString()].reduce((a, d) => a + +d, 0);
  const sum = getDigitsSum(123);

  return <div>{sum}</div>;
}

export { App };
