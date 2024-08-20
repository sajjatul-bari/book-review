const getStoredBook = () => {
  const storedBook = localStorage.getItem("books-read");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveStoredBook = (id) => {
  const storedBooks = getStoredBook();
  const exists = storedBooks.find((jobId) => jobId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("books-read", JSON.stringify(storedBooks));
  }
};

//wishlist books

const getStoredWishlistBook = () => {
  const storedWishlistBook = localStorage.getItem("wishlist-books");
  if (storedWishlistBook) {
    return JSON.parse(storedWishlistBook);
  }
  return [];
};

const saveStoredWishlistBook = (id) => {
  const storedWishlistBooks = getStoredWishlistBook();
  const exists = storedWishlistBooks.find((jobId) => jobId === id);
  if (!exists) {
    storedWishlistBooks.push(id);
    localStorage.setItem("wishlist-books", JSON.stringify(storedWishlistBooks));
  }
};
export {
  saveStoredBook,
  getStoredBook,
  getStoredWishlistBook,
  saveStoredWishlistBook,
};
