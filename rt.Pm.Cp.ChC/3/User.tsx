export type UserType = {
  name: string;
  surn: string;
  age: number;
};

type UserProps = {
  [prop in keyof UserType]: UserType[prop];
};

function User({ name, surn, age }: UserProps): JSX.Element {
  const layout = (
    <tr>
      <td>{name}</td>
      <td>{surn}</td>
      <td>{age.toString()}</td>
    </tr>
  );

  return <>{layout}</>;
}

export { User };
