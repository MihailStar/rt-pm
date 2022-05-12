import { User, UserType } from './User';

function App(): JSX.Element {
  const users: UserType[] = [
    {
      name: 'name 1',
      surn: 'surn 1',
      age: 31,
    },
    {
      name: 'name 2',
      surn: 'surn 2',
      age: 32,
    },
    {
      name: 'name 3',
      surn: 'surn 3',
      age: 33,
    },
  ];

  const layout = (
    <table>
      <tbody>
        <User name={users[0].name} surn={users[0].surn} age={users[0].age} />
        <User name={users[1].name} surn={users[1].surn} age={users[1].age} />
        <User name={users[2].name} surn={users[2].surn} age={users[2].age} />
      </tbody>
    </table>
  );

  return <>{layout}</>;
}

export { App };
