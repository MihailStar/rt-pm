import { nanoid } from 'nanoid';
import { useState } from 'react';
import { User, UserType } from './User';

function generateId(): string {
  return nanoid();
}

type UserWithId = UserType & { id: ReturnType<typeof generateId> };

const initUsers: UserWithId[] = [
  { id: generateId(), name: 'name1', surn: 'surn1', age: 31 },
  { id: generateId(), name: 'name2', surn: 'surn2', age: 32 },
  { id: generateId(), name: 'name3', surn: 'surn3', age: 33 },
];

function Users(): JSX.Element {
  const [users] = useState(initUsers);

  const divs = (
    <div>
      {users.map(({ id, name, surn, age }) => (
        <User key={id} id={id} name={name} surn={surn} age={age} />
      ))}
    </div>
  );

  return <>{divs}</>;
}

export { Users };
