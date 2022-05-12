import { nanoid } from 'nanoid';
import { useState } from 'react';
import { UserFields, UserFieldsCanUpdated, User } from './User';

function generateId(): string {
  return nanoid();
}

const users: UserFields[] = [
  { id: generateId(), name: 'name1', surn: 'surn1', age: 31, isBanned: false },
  { id: generateId(), name: 'name2', surn: 'surn2', age: 32, isBanned: false },
  { id: generateId(), name: 'name3', surn: 'surn3', age: 33, isBanned: false },
];

const initUsers: UserFieldsCanUpdated[] = users.map((user) => ({
  ...user,
  isEdited: false,
}));

function Users(): JSX.Element {
  const [users, setUsers] = useState(initUsers);

  function updateUser(
    id: UserFields['id'],
    fields: Partial<UserFieldsCanUpdated>
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

  const rows = users.map((props) => (
    <User
      key={props.id}
      update={(fields) => updateUser(props.id, fields)}
      {...props}
    />
  ));
  const table = (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );

  return <>{table}</>;
}

export { Users };
