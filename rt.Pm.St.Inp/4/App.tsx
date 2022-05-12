import { ChangeEvent, useState } from 'react';

/** @tutorial https://ru.stackoverflow.com/questions/575862 */
function isNumber(value: string): boolean {
  return /^-?\d*\.?\d+$/.test(value);
}

/** @tutorial https://ru.wikipedia.org/wiki/Градус_Фаренгейта */
function convertFahrenheitToCelsius(degrees: number): number {
  return (5 / 9) * (degrees - 32);
}

function App() {
  const initialValue = '0';
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const [fahrenheit, setFahrenheit] = useState(Number.parseInt(value));

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;

    if (isNumber(value)) {
      setValue(value);
      setIsValid(true);
      setFahrenheit(Number.parseInt(value));
    } else {
      setValue(value);
      setIsValid(false);
    }
  }

  return (
    <>
      <input
        inputMode="numeric"
        onChange={handleChange}
        placeholder="number"
        style={{
          backgroundColor: isValid ? 'transparent' : 'tomato',
          transition: '300ms',
        }}
        type="text"
        value={value}
      />
      <span>°F</span>
      <p
        style={{
          opacity: isValid ? '1' : '0',
          transition: '300ms',
        }}
      >
        {convertFahrenheitToCelsius(fahrenheit)}
        <span>°C</span>
      </p>
    </>
  );
}

export { App };
