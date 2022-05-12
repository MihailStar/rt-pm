import { ChangeEvent, useState } from 'react';

type name = string;

function getDayOfWeek(date: Date, locale: 'en' | 'ru' = 'en'): string {
  const nameDayOfWeek: {
    [prop in typeof locale]: [name, name, name, name, name, name, name];
  } = {
    en: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
    ru: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  };

  return nameDayOfWeek[locale][date.getDay()];
}

const initDate = { year: 2025, month: 12, day: 31 };

function App() {
  const [date, setDate] = useState(initDate);

  function handleChange(
    event: ChangeEvent<HTMLInputElement>,
    prop: keyof typeof date
  ): void {
    const dateСopy = { ...date };
    dateСopy[prop] = Number.parseInt(event.target.value);
    setDate(dateСopy);
  }

  const dayOfWeek = getDayOfWeek(
    new Date(`${date.year}-${date.month}-${date.day}`)
  );

  return (
    <>
      <div>
        <input
          onChange={(event) => handleChange(event, 'year')}
          type="number"
          value={date.year}
        />
        <input
          onChange={(event) => handleChange(event, 'month')}
          type="number"
          value={date.month}
        />
        <input
          onChange={(event) => handleChange(event, 'day')}
          type="number"
          value={date.day}
        />
      </div>
      <p>
        {date.year} {date.month} {date.day} {dayOfWeek}
      </p>
    </>
  );
}

export { App };
