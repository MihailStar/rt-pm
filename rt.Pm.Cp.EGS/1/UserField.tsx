export type UserFieldProps<Value = string> = {
  value: Value;
  onChangeValue: (value: Value) => void;
  isEdited: boolean;
};

function UserField({
  value,
  onChangeValue,
  isEdited,
}: UserFieldProps): JSX.Element {
  return isEdited ? (
    <input
      value={value}
      onChange={(event) => onChangeValue(event.target.value)}
    />
  ) : (
    <span>{value}</span>
  );
}

export { UserField };
