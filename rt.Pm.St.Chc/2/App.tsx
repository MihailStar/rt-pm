import { useState } from "react";

function App() {
  const checkboxes = [
    { label: "html", state: useState(false) },
    { label: "css", state: useState(false) },
    { label: "js", state: useState(false) },
  ];

  function handleChange(index: number): void {
    const [isChecked, setIsChecked] = checkboxes[index].state;

    setIsChecked(!isChecked);
  }

  const inputs = checkboxes.map(({ label, state: [isChecked] }, index) => (
    <label key={index}>
      <input
        checked={isChecked}
        onChange={() => handleChange(index)}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  ));

  const paragraphs = checkboxes.map(({ label, state: [isChecked] }, index) => (
    <p key={index} style={{ display: isChecked ? "block" : "none" }}>
      {label}
    </p>
  ));

  return (
    <>
      {inputs}
      {paragraphs}
    </>
  );
}

export { App };
