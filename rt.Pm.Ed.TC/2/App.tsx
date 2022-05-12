import { nanoid } from 'nanoid';
import { useState } from 'react';

function generateId(): string {
  return nanoid();
}

type Field = {
  name: string;
  value: string;
  isEdit: boolean;
};

type Note = {
  id: ReturnType<typeof generateId>;
  fields: Field[];
};

const initNotes: Note[] = [
  {
    id: generateId(),
    fields: [
      { name: 'prop1', value: 'value11', isEdit: false },
      { name: 'prop2', value: 'value12', isEdit: false },
      { name: 'prop3', value: 'value13', isEdit: false },
    ],
  },
  {
    id: generateId(),
    fields: [
      { name: 'prop1', value: 'value21', isEdit: false },
      { name: 'prop2', value: 'value22', isEdit: false },
      { name: 'prop3', value: 'value23', isEdit: false },
    ],
  },
  {
    id: generateId(),
    fields: [
      { name: 'prop1', value: 'value31', isEdit: false },
      { name: 'prop2', value: 'value32', isEdit: false },
      { name: 'prop3', value: 'value33', isEdit: false },
    ],
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);

  function changeNoteField(
    id: Note['id'],
    name: Field['name'],
    data: Partial<Omit<Field, 'name'>>
  ): void {
    setNotes(
      notes.map((note) => {
        if (note.id !== id) {
          return note;
        }

        const updatedFields = note.fields.map((field) =>
          field.name === name ? { ...field, ...data } : field
        );

        return { id, fields: updatedFields };
      })
    );
  }

  function startEdit(id: Note['id'], name: Field['name']): void {
    changeNoteField(id, name, { isEdit: true });
  }

  function endEdit(id: Note['id'], name: Field['name']): void {
    changeNoteField(id, name, { isEdit: false });
  }

  const tableRows = notes.map((note) => {
    const tableCells = note.fields.map((field) => {
      const element = field.isEdit ? (
        <input
          onBlur={() => endEdit(note.id, field.name)}
          onChange={(event) =>
            changeNoteField(note.id, field.name, { value: event.target.value })
          }
          value={field.value}
        />
      ) : (
        <span onClick={() => startEdit(note.id, field.name)}>
          {field.value}
        </span>
      );

      return <td key={field.name}>{element}</td>;
    });

    return <tr key={note.id}>{tableCells}</tr>;
  });

  return (
    <>
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}

export { App };
