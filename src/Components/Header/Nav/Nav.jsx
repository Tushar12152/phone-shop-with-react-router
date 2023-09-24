import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
    return (
        <div>
             <div className=" flex justify-between  shadow-lg items-center p-5">
                <Logo></Logo>

           <div  className=" flex gap-5">
           <NavLink to='/' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home</NavLink>

<NavLink to='/favorite' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Favorite</NavLink>

<NavLink to='/login' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>LogIn</NavLink>
           </div>


             </div>
        </div>
    );
};

export default Nav;