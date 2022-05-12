import { SyntheticEvent } from 'react';

function App() {
  function onClick(arg1: string, arg2: string, event: SyntheticEvent): void {
    console.log(arg1, arg2, event);
  }

  return (
    <div>
      <button onClick={(event) => onClick('param1', 'param2', event)}>
        act
      </button>
    </div>
  );
}

export { App };
