export type UserType = {
  id: string;
  name: string;
  surn: string;
  age: number;
};

type UserProps = {
  [prop in keyof UserType]: UserType[prop];
};

function User({ id, name, surn, age }: UserProps): JSX.Element {
  const paragraph = (
    <p>
      <b>id</b>:{id}, <b>name</b>:{name}, <b>surn</b>:{surn}, <b>age</b>:{age}
    </p>
  );

  return <>{paragraph}</>;
}

export { User };
