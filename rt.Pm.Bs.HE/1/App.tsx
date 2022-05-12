function App() {
  function show1(): void {
    alert(1);
  }

  function show2(): void {
    alert(2);
  }

  return (
    <div>
      <button onClick={show1}>act1</button>
      <button onClick={show2}>act2</button>
    </div>
  );
}

export { App };
