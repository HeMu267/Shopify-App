import { useEffect, useState } from "react";
import {Spinner} from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setloading]=useState(false);
  const [posts,setPosts]=useState([]);
  async function fetchData(){
    setloading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setPosts(data);
    } 
    catch(err)
    {
      console.log("An Error has occured while calling API");
      console.log(err);
    }
    setloading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="flex flex-wrap max-w-[1200px]  items-stretch mx-auto pt-8 justify-center min-h-[60vh] gap-6 gap-y-10 mb-10">
      {
        loading ? (<Spinner/>):
        (posts.length===0?(<p className="text-5xl text-center p-5 text-slate-700">No Data available currently</p>):
        (
          <>
            {posts.map((post)=>(<Product post={post}/>))}
          </>
        ))
      }
    </div>
  );
};

export default Home;
