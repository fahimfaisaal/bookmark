import { useRouter } from 'next/router';
import React from 'react';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';

const Books = () => {
  const router = useRouter();
  const books = router.query.books;

  console.log(books);
  return (
    <div>
      <h1>Books</h1>
      <Filter />
      <PublicationCover />
    </div>
  );
};

export default Books;
