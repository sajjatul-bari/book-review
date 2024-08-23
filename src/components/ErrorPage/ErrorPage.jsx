import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center min-h-screen space-y-5">
            <h2 className="text-2xl">Ooppsssss!</h2>
            <h1 className="text-8xl text-red-800">404</h1>
            <p>Page not Found</p>
            <Link to="/">
            <button className="btn bg-[#23be0b] text-white">Go back to Home</button>
            </Link>
            
        </div>
    );
};

export default ErrorPage;