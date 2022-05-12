import { useState } from 'react';

function App() {
  const [value, setValue] = useState('text');
  const [isEdit, setIsEdit] = useState(false);

  const element = isEdit ? (
    <input onChange={(event) => setValue(event.target.value)} value={value} />
  ) : (
    <span onClick={() => setIsEdit(true)}>{value}</span>
  );

  return (
    <>
      <p>{element}</p>
      <button disabled={isEdit} type="button" onClick={() => setIsEdit(true)}>
        edit mode
      </button>
      <button disabled={!isEdit} type="button" onClick={() => setIsEdit(false)}>
        display mode
      </button>
    </>
  );
}

export { App };
