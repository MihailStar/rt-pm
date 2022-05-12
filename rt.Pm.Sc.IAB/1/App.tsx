import { ChangeEvent, useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function calculateSum(nums: number[]): number {
    return nums.reduce((acc, num) => acc + num, 0);
  }

  function changeHandler(
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ): void {
    const numbersCopy = [...numbers];

    numbersCopy.splice(index, 1, Number.parseInt(event.target.value));
    setNumbers(numbersCopy);
  }

  const inputs = numbers.map((number, index) => (
    <input
      onChange={(event) => changeHandler(event, index)}
      type="number"
      key={index}
      value={number}
    />
  ));

  return (
    <>
      {inputs}
      <p>
        ({numbers.join(' + ')}) / {numbers.length}
        <span> = </span>
        {calculateSum(numbers) / numbers.length}
      </p>
    </>
  );
}

export { App };
