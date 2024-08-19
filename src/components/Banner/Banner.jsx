const Banner = () => {
  return (
    
      <div className="hero bg-base-200 rounded-xl py-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-60 ">
          <img
            src="/public/images/pngwing 1.png"
            className="max-w-sm rounded-lg "
          />
          <div className="space-y-10">
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
  );
};

export default Banner;
