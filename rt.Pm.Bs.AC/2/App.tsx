function App() {
  let paragraphs: JSX.Element | null = null;
  const isAdmin = true;

  if (isAdmin) {
    paragraphs = (
      <>
        <p>text1</p>
        <p>text2</p>
        <p>text3</p>
      </>
    );
  }

  return <>{paragraphs}</>;
}

export { App };
