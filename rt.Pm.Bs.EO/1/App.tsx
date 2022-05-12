import { SyntheticEvent } from 'react';

function App() {
  function printEvent(event: SyntheticEvent): void {
    console.dir(event);
  }

  return (
    <div>
      <button onClick={printEvent}>act</button>
    </div>
  );
}

export { App };
