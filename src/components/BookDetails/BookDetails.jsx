import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div className="flex justify-between min-w-full py-10 gap-10 ">
      <div className="w-1/2 bg-[#f3f3f3] border py-10 rounded-xl">
        <img className="mx-auto" src={image} alt="" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-5xl font-bold">{bookName}</h1>
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
          <a className="btn text-black bg-white">Read</a>
          <a className="btn text-white bg-[#59c6d2]">Wishlist</a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
