import {BsFillTrash3Fill} from "react-icons/bs"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({item}) => {
  const dispatch=useDispatch();
  function removeCart()
  {
    dispatch(remove(item));
  }
  return(
    <div className="flex justify-around p-3 rounded-xl items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <img src={item.image} className="h-[180px] w-[25%]"/>
      <div className="flex flex-col w-[60%] justify-between gap-6">
        <p className="text-2xl text-slate-700 font-semibold">{item.title}</p>
        <p className="w-full text-gray-700">{item.description.split(" ").splice(0,15).join(" ")+"..."}</p>
        <div className="flex w-[90%] justify-between items-center">
          <p className="text-green-600 font-bold relative left-[-10px]">{`$${item.price}`}</p>
          <BsFillTrash3Fill size='34px' onClick={removeCart} className="p-2 rounded-3xl bg-red-300 hover:bg-red-500"/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
