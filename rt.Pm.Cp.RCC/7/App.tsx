import { useState } from 'react';

function App(): JSX.Element {
  const [C, setC] = useState<number | null>(0);

  function CtoF(deg: number): number {
    return (deg * 9) / 5 + 32;
  }

  function FtoC(deg: number): number {
    return ((deg - 32) * 5) / 9;
  }

  const CElement = (
    <label>
      <span>C: </span>
      <input
        type="number"
        value={C === null ? '' : String(C)}
        onChange={(event) =>
          setC(event.target.value === '' ? null : Number(event.target.value))
        }
      />
    </label>
  );

  const FElement = (
    <label>
      <span>F: </span>
      <input
        type="number"
        value={C === null ? '' : String(CtoF(C))}
        onChange={(event) =>
          setC(
            event.target.value === '' ? null : FtoC(Number(event.target.value))
          )
        }
      />
    </label>
  );

  return (
    <>
      {CElement}
      <span>&nbsp;=&nbsp;</span>
      {FElement}
    </>
  );
}

export { App };
