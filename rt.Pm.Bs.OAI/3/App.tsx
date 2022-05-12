import { v4 as uuid } from 'uuid';

function generateId(): string {
  return uuid();
}

function App() {
  return <div>{generateId()}</div>;
}

export { App };
