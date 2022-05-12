type EmployeeType = {
  name: string;
  surn: string;
  salary: number;
};

type EmployeeProps = {
  [prop in keyof EmployeeType]: EmployeeType[prop];
};

function Employee(props: EmployeeProps): JSX.Element {
  const layout = (
    <ul>
      <li>name: {props.name}</li>
      <li>surn: {props.surn}</li>
      <li>salary: {props.salary}</li>
    </ul>
  );

  return <>{layout}</>;
}

export { Employee };
