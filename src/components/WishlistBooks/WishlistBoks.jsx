import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegFile } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishlistBoks = ({book}) => {
    const {
        bookId,
        bookName,
        author,
        image,
        category,
        rating,
        totalPages,
        publisher,
        tags,
        yearOfPublishing,
      } = book;
    return (
        <div className="border mb-5 p-5 rounded-xl ">
      <div className="flex lg:flex-row gap-10">
        <div className="border p-5 rounded-xl bg-base-200">
          <img src={image} className=" h-40 w-36 rounded-lg" />
        </div>
        <div className="space-y-3 w-full">
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p>
            <span className="text-black font-semibold ">By: </span> {author}
          </p>
          <div className="flex items-center gap-10">
            <p className="flex gap-2 text-[#23be0b] items-center">
              <span className="text-black font-semibold ">Tag :</span>
              {tags.map((tag, idx) => (
                <p key={idx} className="badge badge-outline">
                  {tag}
                </p>
              ))}
            </p>
            <div className="flex items-center gap-2">
              <CiLocationOn></CiLocationOn>
              <p>Year of Publication : {yearOfPublishing}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <HiOutlineUsers className="text-xl"></HiOutlineUsers>
              <p>Publisher : {publisher}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegFile className="text-xl"></FaRegFile>
              <p>Pages : {totalPages}</p>
            </div>
          </div>
          <hr className="border border-slate-300" />
          <div className="flex items-center gap-3">
            <p className="py-2 px-7 bg-[#e0eeff] text-[#0073ff] rounded-full">
              Category : {category}
            </p>
            <p className="py-2 px-7 bg-[#fff3e0] text-[#ff9e02] rounded-full">
              Rating : {rating}
            </p>
            <Link to={`/books/${bookId}`}>
              <button className="bg-[#23be0b] text-white py-2 px-7 rounded-full">
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};
WishlistBoks.propTypes = {
    book: PropTypes.object.isRequired,
  };
export default WishlistBoks;