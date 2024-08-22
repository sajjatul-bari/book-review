import ReadBooks from "../ReadBooks/ReadBooks";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredBook,
  getStoredWishlistBook,
} from "../../utility/localstorage";
import WishlistBoks from "../WishlistBooks/WishlistBoks";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setwishlistBooks] = useState([]);

  useEffect(() => {
    const storedBooksId = getStoredBook();
    const storedWishlistBooksId = getStoredWishlistBook();

    if (books && books.length > 0) {
      const booksRead = books.filter((book) =>
        storedBooksId.includes(book.bookId)
      );
      setReadBooks(booksRead);
    }
    if (books && books.length > 0) {
      const booksWishlist = books.filter(
        (book) =>
          storedWishlistBooksId.includes(book.bookId) &&
          !storedBooksId.includes(book.bookId)
      );
      setwishlistBooks(booksWishlist);
    }
  }, [books]);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
        id="read"
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
          id="wish"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="WishlistBooks"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div>
            {wishlistBooks.map((book, idx) => (
              <WishlistBoks key={idx} book={book}></WishlistBoks>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
