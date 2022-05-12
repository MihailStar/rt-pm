import { useState } from 'react';

type UserFieldProps<Value = string> = {
  value: Value;
  onChangeValue: (value: Value) => void;
};

function UserField({ value, onChangeValue }: UserFieldProps): JSX.Element {
  const [isEdited, setIsEdited] = useState(false);

  return isEdited ? (
    <input
      value={value}
      onChange={(event) => onChangeValue(event.target.value)}
      onBlur={() => setIsEdited(false)}
    />
  ) : (
    <span onClick={() => setIsEdited(true)}>{value}</span>
  );
}

export { UserField };
