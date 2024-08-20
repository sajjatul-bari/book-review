import ReadBooks from "../ReadBooks/ReadBooks";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../../utility/localstorage";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedBooksId = getStoredBook();

    if (books && books.length > 0) {
      const booksRead = books.filter((book) =>
        storedBooksId.includes(book.bookId)
      );
      setReadBooks(booksRead);
      console.log(booksRead);
    }
  }, [books]);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="ReadBooks"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {readBooks.map((book, idx) => (
              <ReadBooks key={idx} book={book}></ReadBooks>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="WishlistBooks"
          
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
