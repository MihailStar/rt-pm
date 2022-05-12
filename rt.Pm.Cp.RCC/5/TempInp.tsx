import { Temp } from './Calculator';

type TempInpProps = {
  temp: Temp;
  onChangeTemp: (temp: Temp) => void;
};

function TempInp({ temp, onChangeTemp }: TempInpProps): JSX.Element {
  return (
    <input
      type="number"
      value={temp === '' ? '' : String(temp)}
      onChange={(event) => {
        event.target.value === ''
          ? onChangeTemp('')
          : onChangeTemp(Number(event.target.value));
      }}
    />
  );
}

export { TempInp };
