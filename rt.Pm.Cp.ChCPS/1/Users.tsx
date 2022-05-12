import { nanoid } from 'nanoid';
import { useState } from 'react';
import { User, UserType } from './User';

function generateId(): string {
  return nanoid();
}

type UserWithId = UserType & { id: ReturnType<typeof generateId> };

const initUsers: UserWithId[] = [
  { id: generateId(), name: 'name1', surname: 'surn1', age: 31 },
  { id: generateId(), name: 'name2', surname: 'surn2', age: 32 },
  { id: generateId(), name: 'name3', surname: 'surn3', age: 33 },
];

function Users(): JSX.Element {
  const [users] = useState(initUsers);

  const table = (
    <table>
      <tbody>
        {users.map(({ id, name, surname, age }) => (
          <User key={id} name={name} surname={surname} age={age} />
        ))}
      </tbody>
    </table>
  );

  return <>{table}</>;
}

export { Users };
