import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen bg-yellow-200 flex flex-col gap-2 items-center justify-center">
                <h1 className="text-center">ERROR</h1>
                <Link to="/">
                <button className="p-2 rounded bg-gray-300">Back Home</button>
                </Link>
        </div>
    );
};

export default ErrorPage;