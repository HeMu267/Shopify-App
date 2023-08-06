import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import "../pages/Cart.css";
const Cart = () => {
  const cart=useSelector((state)=>state.cart.cartItems);
  const totalAmts=useSelector((state)=>state.cart.totalAmt);
  return(
    <div className="mt-10 mb-10 ">
      {
        cart.length>0?
        (<div className="flex gap-6 max-w-[1200px] mx-auto justify-between">
            <div className="flex flex-col w-[55%] h-[70vh] shadow-inner   overflow-scroll gap-4 overflow-x-hidden p-4  rounded-xl">
              {
                cart.map((item)=>(<CartItem item={item}/>))
              }
            </div>
            <div className="flex flex-col gap-2 w-[35%]">
                <p className="text-green-700 text-2xl font-semibold tracking-wide">Your Cart</p>
                <h1 className="text-green-700 text-5xl uppercase font-semibold">Summary</h1>
                <p className="text-slate-700 text-lg font-semibold">{`Total Items:${cart.length}`}</p>
                <p className="text-slate-700 text-lg font-semibold">{`Total Amount:$${totalAmts.toFixed(3)}`}</p>
                <button className="bg-green-700 rounded-md pt-2 pb-2 pr-6 pl-6 text-white tracking-wider text-lg">Checkout</button>
            </div>
        </div>):
        (
          <div className="min-h-[60vh] flex flex-col justify-center items-center gap-6">
            <h1 className="text-xl text-grey-300 font-semibold">Your Cart is Empty!!</h1>
            <NavLink to="/">
              <button className="bg-green-500 rounded-md pt-2 pb-2 pr-6 pl-6 text-white tracking-wider text-lg">
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
