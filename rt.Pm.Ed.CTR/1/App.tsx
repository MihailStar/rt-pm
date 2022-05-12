import { useState } from 'react';

function App() {
  type Visible = [boolean, boolean, boolean];
  const [visible, setVisible] = useState<Visible>([false, false, false]);

  const content = visible.map((isVisible, index) => (
    <div key={index}>
      <button
        onClick={() => {
          const visibleCopy: Visible = [...visible];
          visibleCopy[index] = !isVisible;
          setVisible(visibleCopy);
        }}
        type="button"
      >
        {isVisible ? 'hide' : 'show'} {index + 1}
      </button>
      {isVisible && <p>text {index + 1}</p>}
    </div>
  ));

  return <>{content}</>;
}

export { App };
