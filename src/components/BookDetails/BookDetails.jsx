import { useLoaderData, useParams } from "react-router-dom";
import {
  getStoredBook,
  getStoredWishlistBook,
  saveStoredBook,
  saveStoredWishlistBook,
} from "../../utility/localstorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseFloat(bookId);
  const book = books.find((book) => book.bookId === idInt);
  const {
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    review,
  } = book;

  const handleReadBook = () => {
    const isBookInList = getStoredBook().includes(idInt);
    if (isBookInList) {
      toast.error("Book is already added to Book Lists");
    } else {
      toast.success("Book added to Book Lists");
    }
    saveStoredBook(idInt);
  };

  const handleWishlistBook = () => {
    const isBookInList = getStoredBook().includes(idInt);
    const isBookInWishList = getStoredWishlistBook().includes(idInt);
    if (isBookInList) {
      toast.error("You already read this book");
    } else if (isBookInWishList) {
      toast.error("You already addad to Wish List");
    } else {
      toast.success("Book added to Wish Lists");
    }
    saveStoredWishlistBook(idInt);
  };

  return (
    <div className="lg:flex justify-between min-w-full pt-10 pb-16 gap-10 ">
      <div className="lg:w-1/2 w-full bg-[#f3f3f3] border py-10 rounded-xl mb-5">
        <img className="mx-auto " src={image} alt="" />
      </div>
      <div className="lg:w-1/2 w-full space-y-5">
        <h1 className="lg:text-5xl text-3xl font-bold">{bookName}</h1>
        <h3 className="text-lg font-medium">By : {author}</h3>
        <hr className="border border-slate-500" />
        <h3 className="text-lg font-medium">{category}</h3>
        <hr className="border border-slate-500" />
        <p>
          <span className="text-black font-semibold ">Review : </span>
          {review}
        </p>
        <p className="flex gap-2 text-[#23be0b] items-center">
          <span className="text-black font-semibold ">Tag :</span>
          {tags.map((tag, idx) => (
            <p key={idx} className="badge badge-outline">
              {tag}
            </p>
          ))}
        </p>
        <hr className="border border-slate-500" />

        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td>Number of Pages :</td>
                <td className="font-bold">{totalPages}</td>
              </tr>

              <tr>
                <td>Publisher :</td>
                <td className="font-bold">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing :</td>
                <td className="font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating :</td>
                <td className="font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-x-3">
          <a onClick={handleReadBook} className="btn text-black bg-white">
            Read
          </a>

          <a
            onClick={handleWishlistBook}
            className="btn text-white bg-[#59c6d2]"
          >
            Wishlist
          </a>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;
