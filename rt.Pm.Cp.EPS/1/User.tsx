export type UserFields = {
  id: string;
  name: string;
  surn: string;
  age: number;
  isBanned: boolean;
};

export type UserFieldsCanUpdated = UserFields & {
  isEdited: boolean;
};

export type UserProps = UserFieldsCanUpdated & {
  update(fields: Partial<Omit<UserFieldsCanUpdated, 'id'>>): void;
};

function User({
  name,
  surn,
  age,
  isBanned,
  isEdited,
  update,
}: UserProps): JSX.Element {
  const nameElement = isEdited ? (
    <input
      onChange={(event) => update({ name: event.target.value })}
      type="text"
      value={name}
    />
  ) : (
    <span>{name}</span>
  );
  const surnElement = isEdited ? (
    <input
      onChange={(event) => update({ surn: event.target.value })}
      type="text"
      value={surn}
    />
  ) : (
    <span>{surn}</span>
  );
  const ageElement = isEdited ? (
    <input
      onChange={(event) => update({ age: Number(event.target.value) })}
      type="number"
      value={age}
    />
  ) : (
    <span>{age}</span>
  );
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

  const row = (
    <tr>
      <td>{nameElement}</td>
      <td>{surnElement}</td>
      <td>{ageElement}</td>
      <td>{isBanned ? 'banned' : 'not banned'}</td>
      <td>{banButton}</td>
      <td>{editButton}</td>
    </tr>
  );

  return <>{row}</>;
}

export { User };
