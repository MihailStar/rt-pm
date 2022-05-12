import { UserField } from './UserField';

export type UserDTO = {
  id: string;
  name: string;
  surn: string;
  age: number;
  isBanned: boolean;
};

type UserProps = Omit<UserDTO, 'id'> & {
  update(fields: Partial<Omit<UserProps, 'update'>>): void;
};

function User({ name, surn, age, isBanned, update }: UserProps): JSX.Element {
  const banButton = (
    <button onClick={() => update({ isBanned: !isBanned })} type="button">
      {isBanned ? 'unban' : 'ban'}
    </button>
  );

  return (
    <tr>
      <td>
        {
          <UserField
            value={name}
            onChangeValue={(value) => update({ name: value })}
          />
        }
      </td>
      <td>
        {
          <UserField
            value={surn}
            onChangeValue={(value) => update({ surn: value })}
          />
        }
      </td>
      <td>
        {
          <UserField
            value={String(age)}
            onChangeValue={(value) => update({ age: Number(value) })}
          />
        }
      </td>
      <td>{isBanned ? 'banned' : 'not banned'}</td>
      <td>{banButton}</td>
    </tr>
  );
}

export { User };
