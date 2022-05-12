import { SyntheticEvent } from 'react';

function App() {
  function printEventTarget(event: SyntheticEvent): void {
    console.dir(event.target);
  }

  return (
    <div>
      <button onClick={printEventTarget}>act</button>
    </div>
  );
}

export { App };
