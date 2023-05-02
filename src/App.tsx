import { useState } from 'react';
import { useAsync } from './hooks/useAsync';
import db from 'bridg/app/client/db';
import { Blog } from '@prisma/client';

function App() {
  const [data] = useAsync(() => db.user.findMany({ include: { blogs: true } }));
  const [searchResults, setSearchResults] = useState<Blog[]>([]);

  return (
    <div>
      <input
        placeholder="Search for blogs.."
        onChange={async (e) => {
          const query = e.target.value;
          if (!query) return setSearchResults([]);
          const blogs = await db.blog.findMany({ where: { title: { contains: query, mode: 'insensitive' } } });
          setSearchResults(blogs);
        }}
      />
      <br />
      Blog Search Results:
      <pre>{JSON.stringify(searchResults, null, 1)}</pre>
      {!searchResults.length && (
        <>
          All Data (Users and their blogs):
          <pre>{JSON.stringify(data, null, 1)}</pre>
        </>
      )}
    </div>
  );
}

export default App;
