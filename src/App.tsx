import { useAsync } from './hooks/useAsync';
import db from 'bridg/app/client/db';

function App() {
  const [data] = useAsync(() => db.user.findMany({ include: { blogs: true } }));

  return (
    <div>
      <pre>{JSON.stringify(data, null, 1)}</pre>
    </div>
  );
}

export default App;
