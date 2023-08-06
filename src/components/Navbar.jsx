import { NavLink, useNavigate } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi"
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate=useNavigate();
  const total=useSelector((state)=>state.cart.total);
  return (
    <div className="flex w-full justify-between pr-20 pl-20 items-center pt-4 pb-4 bg-slate-900">
      <NavLink to="/">
        <img src="./logo.png" className="w-[185px]"/>
      </NavLink>
      <div className="flex gap-6 max-[768px]:hidden justify-center">
        <button onClick={()=>{navigate("/")}} className="focus:outline-none text-white leading-10 text-lg">Home</button>
        <NavLink to="/cart" className="relative">
          {
            total>0 && 
              <p className="absolute text-sm text-white right-[-10px] bg-green-500 rounded-3xl w-5 text-center animate-bounce">{total}</p> 
          }
          <FiShoppingCart size={28} color="white"/>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
