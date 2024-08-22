import ReadBooks from "../ReadBooks/ReadBooks";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

import {
  getStoredBook,
  getStoredWishlistBook,
} from "../../utility/localstorage";
import WishlistBoks from "../WishlistBooks/WishlistBoks";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setwishlistBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  const handleSortBooks = (criteria) => {
    let sortedBooks = [...books]; // Create a copy of the books array

    if (criteria === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating); // Sort by Rating (Descending)
    } else if (criteria === "totalPages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages); // Sort by Number of Pages (Descending)
    } else if (criteria === "yearOfPublishing") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing); // Sort by Published Year (Descending)
    }

    setDisplayBooks(sortedBooks); // Update the displayBooks state with the sorted list
  };

  useEffect(() => {
    const storedBooksId = getStoredBook();
    const storedWishlistBooksId = getStoredWishlistBook();

    if (books && books.length > 0) {
      const booksRead = books.filter((book) =>
        storedBooksId.includes(book.bookId)
      );
      setReadBooks(booksRead);
      setDisplayBooks(books);
    }
    if (books && books.length > 0) {
      const booksWishlist = books.filter(
        (book) =>
          storedWishlistBooksId.includes(book.bookId) &&
          !storedBooksId.includes(book.bookId)
      );
      setwishlistBooks(booksWishlist);
      setDisplayBooks(books);
    }
    
  }, [books]);
  return (
    <div>
      <div className="p-10 text-center bg-[#f2f2f2] rounded-xl mb-10">
        <h1 className="text-4xl font-extrabold">Book</h1>
      </div>

      <div className="dropdown dropdown-bottom dropdown-center justify-center flex mb-5 ">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-[#23be0b] text-white m-1 items-center"
        >
          Sort By
          <IoIosArrowDropdown className="text-xl"></IoIosArrowDropdown>
        </div>
        <ul
          tabIndex={0}
          id="sortCriteria"
          onChange={(e) => handleSortBooks(e.target.value)}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <select
            id="sortCriteria"
            onChange={(e) => handleSortBooks(e.target.value)}
          >
            <option value="rating">Rating</option>
            <option value="totalPages">Number of Pages</option>
            <option value="yearOfPublishing">Published Year</option>
          </select>
        </ul>
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
