import { SyntheticEvent } from 'react';

function App() {
  function onClick(event: SyntheticEvent, arg1: string, arg2: string): void {
    console.log(event, arg1, arg2);
  }

  return (
    <div>
      <button onClick={(event) => onClick(event, 'param1', 'param2')}>
        act
      </button>
    </div>
  );
}

export { App };
