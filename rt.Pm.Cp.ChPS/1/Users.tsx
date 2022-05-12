import { nanoid } from 'nanoid';
import { useState } from 'react';
import { User, UserProps } from './User';

function generateId(): string {
  return nanoid();
}

const initUsers: Omit<UserProps, 'toggleIsBanned'>[] = [
  { id: generateId(), name: 'name1', surn: 'surn1', age: 31, isBanned: false },
  { id: generateId(), name: 'name2', surn: 'surn2', age: 32, isBanned: false },
  { id: generateId(), name: 'name3', surn: 'surn3', age: 33, isBanned: false },
];

function Users(): JSX.Element {
  const [users, setUsers] = useState(initUsers);

  function toggleIsBanned(id: UserProps['id']): void {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.isBanned = !user.isBanned;
        }

        return user;
      })
    );
  }

  const rows = users.map((props) => (
    <User key={props.id} toggleIsBanned={toggleIsBanned} {...props} />
  ));
  const table = (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );

  return <>{table}</>;
}

export { Users };
