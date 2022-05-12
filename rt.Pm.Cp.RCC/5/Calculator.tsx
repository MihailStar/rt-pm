import { useState } from 'react';
import { Verdict } from './Verdict';
import { TempInp } from './TempInp';

export type Temp = number | '';

function Calculator() {
  const [temp, setTemp] = useState<Temp>('');

  return (
    <>
      <Verdict temp={temp} />
      <TempInp temp={temp} onChangeTemp={setTemp} />
    </>
  );
}

export { Calculator };
