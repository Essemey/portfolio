const NotFoundPage = (props) => {

  return (
    <main>
      <h1>404 | Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <a style={{ color: 'black' }} href="https://www.essemey.dev">Go home</a>.
      </p>
    </main>
  );
}

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
