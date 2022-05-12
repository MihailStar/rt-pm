import { ChangeEvent, useState } from 'react';

function getSum(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}

const initNums = [1, 2, 3];

function Calculator() {
  const [value, setValue] = useState('');
  const [nums, setNums] = useState(initNums);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleBlur(): void {
    if (value !== '') {
      setNums([...nums, Number(value)]);
      setValue('');
    }
  }

  return (
    <div>
      <p>{`${nums.join(' + ')} = ${getSum(nums)}`}</p>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export { Calculator };
