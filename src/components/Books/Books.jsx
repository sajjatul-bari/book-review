import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/public/book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="py-14">
      <h1 className="text-4xl font-extrabold text-center mb-5">Books</h1>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
