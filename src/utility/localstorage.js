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
export { saveStoredBook, getStoredBook };
