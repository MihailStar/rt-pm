import { Employee } from './Employee';

function App(): JSX.Element {
  return (
    <>
      <ul>
        <li>
          <Employee name="name 1" surn="surn 1" salary={1001} />
        </li>
        <li>
          <Employee name="name 2" surn="surn 2" salary={1002} />
        </li>
        <li>
          <Employee name="name 3" surn="surn 3" salary={1003} />
        </li>
      </ul>
    </>
  );
}

export { App };
