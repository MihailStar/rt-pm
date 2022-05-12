import { useState } from 'react';

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
  const [date] = useState(initDate);

  const dayOfWeek = getDayOfWeek(
    new Date(`${date.year}-${date.month}-${date.day}`)
  );

  return (
    <>
      <p>
        {date.year} {date.month} {date.day} {dayOfWeek}
      </p>
    </>
  );
}

export { App };
