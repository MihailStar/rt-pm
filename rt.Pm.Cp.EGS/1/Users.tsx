import { nanoid } from 'nanoid';
import { useState } from 'react';
import { UserDTO, User } from './User';
import { UserFieldProps } from './UserField';

function generateId(): string {
  return nanoid();
}

const users: UserDTO[] = [
  { id: generateId(), name: 'name1', surn: 'surn1', age: 31, isBanned: false },
  { id: generateId(), name: 'name2', surn: 'surn2', age: 32, isBanned: false },
  { id: generateId(), name: 'name3', surn: 'surn3', age: 33, isBanned: false },
];

export type InitUser = UserDTO & Pick<UserFieldProps, 'isEdited'>;

const initUsers: InitUser[] = users.map((user) => ({
  ...user,
  isEdited: false,
}));

function Users(): JSX.Element {
  const [users, setUsers] = useState(initUsers);

  function updateUser(id: InitUser['id'], fields: Partial<InitUser>): void {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, ...fields };
        }

        return user;
      })
    );
  }

  const userRows = users.map((props) => (
    <User
      key={props.id}
      update={(fields) => updateUser(props.id, fields)}
      {...props}
    />
  ));

  return (
    <table>
      <tbody>{userRows}</tbody>
    </table>
  );
}

export { Users };
