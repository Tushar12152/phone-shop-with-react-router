import { Outlet } from "react-router-dom";

import Nav from "../Header/Nav/Nav";

const Route = () => {
    return (
        <div className="max-w-[80%] mx-auto">
            <Nav></Nav>
             <Outlet></Outlet>
        </div>
    );
};

export default Route;