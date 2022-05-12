import { nanoid } from 'nanoid';
import { User, UserType } from './User';

function generateId(): string {
  return nanoid();
}

type UserWithId = UserType & { id: ReturnType<typeof generateId> };

function App(): JSX.Element {
  const users: UserWithId[] = [
    { id: generateId(), name: 'name1', surn: 'surn1', age: 31 },
    { id: generateId(), name: 'name2', surn: 'surn2', age: 32 },
    { id: generateId(), name: 'name3', surn: 'surn3', age: 33 },
  ];

  const layout = (
    <table>
      <tbody>
        {users.map(({ id, name, surn, age }) => (
          <User key={id} name={name} surn={surn} age={age.toString()} />
        ))}
      </tbody>
    </table>
  );

  return <>{layout}</>;
}

export { App };
