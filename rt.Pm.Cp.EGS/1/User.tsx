import { UserField, UserFieldProps } from './UserField';

export type UserDTO = {
  id: string;
  name: string;
  surn: string;
  age: number;
  isBanned: boolean;
};

export type UserProps = Omit<UserDTO, 'id'> &
  Pick<UserFieldProps, 'isEdited'> & {
    update(fields: Partial<Omit<UserProps, 'update'>>): void;
  };

function User({
  name,
  surn,
  age,
  isBanned,
  isEdited,
  update,
}: UserProps): JSX.Element {
  const banButton = (
    <button onClick={() => update({ isBanned: !isBanned })} type="button">
      {isBanned ? 'unban' : 'ban'}
    </button>
  );
  const editButton = (
    <button onClick={() => update({ isEdited: !isEdited })} type="button">
      {isEdited ? 'save' : 'edit'}
    </button>
  );

  return (
    <tr>
      <td>
        {
          <UserField
            value={name}
            onChangeValue={(value) => update({ name: value })}
            isEdited={isEdited}
          />
        }
      </td>
      <td>
        {
          <UserField
            value={surn}
            onChangeValue={(value) => update({ surn: value })}
            isEdited={isEdited}
          />
        }
      </td>
      <td>
        {
          <UserField
            value={String(age)}
            onChangeValue={(value) => update({ age: Number(value) })}
            isEdited={isEdited}
          />
        }
      </td>
      <td>{isBanned ? 'banned' : 'not banned'}</td>
      <td>{banButton}</td>
      <td>{editButton}</td>
    </tr>
  );
}

export { User };
