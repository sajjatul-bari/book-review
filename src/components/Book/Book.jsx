import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
const Book = ({ book }) => {
  const { bookName, author, image, category, rating, tags } = book;

  return (
    <div className="card bg-base-100 border p-5">
      <figure className="bg-[#f3f3f3] p-5">
        <img className="h-40" src={image} alt="book" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          {tags.map((list, idx) => (
            <div className="badge badge-outline" key={idx}>
              {list}
            </div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>By : {author}</p>
        <div className="border border-dashed my-5"></div>
        <div className="flex  items-center">
          <p>{category}</p>
          <div className="flex items-center gap-3">
            <p>{rating}</p>
            <FaRegStar></FaRegStar>
          </div>
        </div>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Book;
