import { ChangeEvent, useState } from 'react';

function isNumber(value: string): boolean {
  return /^-?\d*\.?\d+$/.test(value);
}

type InputProps = {
  initialValue: number;
  onChange: (value: number) => void;
};

function Input({ initialValue, onChange }: InputProps) {
  const [value, setValue] = useState(initialValue.toString());
  const [isValid, setIsValid] = useState(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;

    if (isNumber(value)) {
      setValue(value);
      setIsValid(true);
      onChange(Number.parseFloat(value));
    } else {
      setValue(value);
      setIsValid(false);
    }
  }

  return (
    <input
      inputMode="numeric"
      onChange={handleChange}
      placeholder="number"
      style={{
        backgroundColor: isValid ? 'initial' : 'tomato',
        transition: '300ms',
      }}
      type="text"
      value={value}
    />
  );
}

export { Input };
