function App() {
  const getDigitsSum = (n: number): number =>
    [...n.toString()].reduce((a, d) => a + +d, 0);

  return <p>{getDigitsSum(12345)}</p>;
}

export { App };
