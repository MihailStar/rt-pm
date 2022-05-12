export type UserType = {
  name: string;
  surname: string;
  age: number;
};

type UserProps = {
  [prop in keyof UserType]: UserType[prop];
};

function User({ name, surname, age }: UserProps): JSX.Element {
  const row = (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age.toString()}</td>
    </tr>
  );

  return <>{row}</>;
}

export { User };
