import { SyntheticEvent } from 'react';

function App() {
  function onClick(arg1: string, event: SyntheticEvent, arg2: string): void {
    console.log(arg1, event, arg2);
  }

  return (
    <div>
      <button onClick={(event) => onClick('param1', event, 'param2')}>
        act
      </button>
    </div>
  );
}

export { App };
