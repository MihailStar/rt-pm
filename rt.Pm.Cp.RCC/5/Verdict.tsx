import { Temp } from './Calculator';

type VerdictInpProps = {
  temp: Temp;
};

function Verdict({ temp }: VerdictInpProps): JSX.Element {
  return temp === '' ? (
    <p>&nbsp;</p>
  ) : (
    <p>{temp <= 0 ? 'твердая' : temp >= 100 ? 'газообразная' : 'жидкая'}</p>
  );
}

export { Verdict };
