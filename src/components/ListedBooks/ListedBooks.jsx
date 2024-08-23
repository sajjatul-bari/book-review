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


  const handleSortReadBooks = (criteria) => {
    let sortedBooks = [...readBooks]; 
    let sortedWishBooks = [...wishlistBooks]; 
    if (criteria === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
      sortedWishBooks.sort((a, b) => b.rating - a.rating);
    } else if (criteria === "totalPages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
      sortedWishBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (criteria === "yearOfPublishing") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      sortedWishBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setReadBooks(sortedBooks); 
    setwishlistBooks(sortedWishBooks); 
  };


  useEffect(() => {
    const storedBooksId = getStoredBook();
    const storedWishlistBooksId = getStoredWishlistBook();

    if (books && books.length > 0) {
      const booksRead = books.filter((book) => storedBooksId.includes(book.bookId));
      setReadBooks(booksRead);

      const booksWishlist = books.filter(
        (book) => storedWishlistBooksId.includes(book.bookId) && !storedBooksId.includes(book.bookId)
      );
      setwishlistBooks(booksWishlist);
    }
  }, [books]);

  return (
    <div>
      <div className="p-10 text-center bg-[#f2f2f2] rounded-xl mb-10">
        <h1 className="lg:text-5xl text-3xl font-extrabold">Book</h1>
      </div>

      <div className="flex justify-center mb-10">
        <select
          onChange={(e) => handleSortReadBooks(e.target.value)}
          className="btn bg-[#23be0b] text-white px-2 items-center"
        >
          <option value="">Sort Books By</option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Published Year</option>
        </select>
        
      </div>

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
