import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/cartSlice";

const Product = ({post}) => {
  const cart=useSelector((state)=>state.cart.cartItems);
  const dispatch=useDispatch();
  function addToCart(){
    dispatch(add(post));
  }
  function removeCart()
  {
    dispatch(remove(post));
  }
  
  return(
    <div className="w-[22%] max-[1280px]:w-[30%] max-[1024px]:w-[40%] max-[768px]:w-[80%] group hover:scale-110 transition duration-300 ease-in flex flex-col items-center pl-6 pt-6 pr-6 pb-3 justify-around shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg gap-4">
      
      <p className="truncate w-3/4 text-lg font-bold text-center">{post.title}</p>
      <p className="w-[80%] text text-[10px] text-gray-400 text-center">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full object-contain"/>
      </div>
      <div className="flex justify-between w-full items-center">
        <p className="text-green-600 font-bold relative left-[-10px]">{`$${post.price}`}</p>
        {
          cart.some((item)=>item.id===post.id)?
          (
          <button className="rounded-3xl border-2 text-slate-700 group-hover:bg-slate-700 group-hover:text-white transition duration-300 ease-in border-slate-700 p-1 text-[12px] w-[60%] relative right-[-10px] tracking-wider font-semibold" onClick={removeCart}>
              REMOVE ITEM
          </button>
          ):
          (
            <button className="rounded-3xl border-2 text-slate-700 group-hover:bg-slate-700 group-hover:text-white transition duration-300 ease-in border-slate-700 p-1 text-[12px] w-[60%] relative right-[-10px] tracking-wider font-semibold" onClick={addToCart}>ADD TO CART</button>
          )
        }
      </div>
    </div>
  );
};

export default Product;
