import { nanoid } from 'nanoid';

function generateId(): string {
  return nanoid();
}

type UserType = {
  id: ReturnType<typeof generateId>;
  name: string;
  surn: string;
  age: number;
};

const user: UserType = {
  id: generateId(),
  name: 'name 1',
  surn: 'surn 1',
  age: 31,
};

function User(): JSX.Element {
  const layout = (
    <ul>
      <li>{user.name}</li>
      <li>{user.surn}</li>
      <li>{user.age}</li>
    </ul>
  );

  return <>{layout}</>;
}

export { User };
