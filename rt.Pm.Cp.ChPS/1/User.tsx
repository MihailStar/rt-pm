export type UserProps = {
  id: string;
  name: string;
  surn: string;
  age: number;
  isBanned: boolean;
  toggleIsBanned(id: UserProps['id']): void;
};

function User(prop: UserProps): JSX.Element {
  const { id, name, surn, age, isBanned, toggleIsBanned } = prop;

  const button = (
    <button onClick={() => toggleIsBanned(id)} type="button">
      {isBanned ? 'unban' : 'ban'}
    </button>
  );
  const row = (
    <tr>
      <td>{name}</td>
      <td>{surn}</td>
      <td>{age}</td>
      <td>{isBanned ? 'banned' : 'not banned'}</td>
      <td>{button}</td>
    </tr>
  );

  return <>{row}</>;
}

export { User };
