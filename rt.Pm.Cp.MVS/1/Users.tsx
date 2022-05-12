import { nanoid } from 'nanoid';
import { useState } from 'react';
import { UserDTO, User } from './User';

function generateId(): string {
  return nanoid();
}

const initUsers: UserDTO[] = [
  { id: generateId(), name: 'name1', surn: 'surn1', age: 31, isBanned: false },
  { id: generateId(), name: 'name2', surn: 'surn2', age: 32, isBanned: false },
  { id: generateId(), name: 'name3', surn: 'surn3', age: 33, isBanned: false },
];

function Users(): JSX.Element {
  const [users, setUsers] = useState(initUsers);

  function updateUser(
    id: UserDTO['id'],
    fields: Partial<Omit<UserDTO, 'id'>>
  ): void {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, ...fields };
        }

        return user;
      })
    );
  }

  const userRows = users.map((user) => (
    <User
      key={user.id}
      update={(fields) => updateUser(user.id, fields)}
      {...user}
    />
  ));

  return (
    <table>
      <tbody>{userRows}</tbody>
    </table>
  );
}

export { Users };
