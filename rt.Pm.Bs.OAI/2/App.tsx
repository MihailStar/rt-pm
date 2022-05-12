import { nanoid } from 'nanoid';

function generateId(): string {
  return nanoid();
}

function App() {
  return <div>{generateId()}</div>;
}

export { App };
