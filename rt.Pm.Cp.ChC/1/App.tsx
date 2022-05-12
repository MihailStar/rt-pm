import { Employee } from './Employee';

function App(): JSX.Element {
  const name1 = 'name 1';
  const surn1 = 'surn 1';
  const salary1 = 1001;

  const name2 = 'name 2';
  const surn2 = 'surn 2';
  const salary2 = 1002;

  const name3 = 'name 3';
  const surn3 = 'surn 3';
  const salary3 = 1003;

  return (
    <>
      <ul>
        <li>
          <Employee name={name1} surn={surn1} salary={salary1} />
        </li>
        <li>
          <Employee name={name2} surn={surn2} salary={salary2} />
        </li>
        <li>
          <Employee name={name3} surn={surn3} salary={salary3} />
        </li>
      </ul>
    </>
  );
}

export { App };
