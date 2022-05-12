type EmployeeType = {
  name: string;
  surn: string;
  salary: number;
};

type EmployeeProps = {
  [prop in keyof EmployeeType]: EmployeeType[prop];
};

function Employee({ name, surn, salary }: EmployeeProps): JSX.Element {
  const layout = (
    <ul>
      <li>name: {name}</li>
      <li>surn: {surn}</li>
      <li>salary: {salary.toString()}</li>
    </ul>
  );

  return <>{layout}</>;
}

export { Employee };
