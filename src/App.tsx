import { useAsync } from './hooks/useAsync';

function App() {
  const [data] = useAsync(() => fetch(`/.netlify/functions/hello-world`).then((r) => r.json()));

  return (
    <div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
}

export default App;
