import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard/FavoriteCard";

const Favorite = () => {
    const [favoriteItem,setFavoriteItem]=useState([]);
    const [nodata,setNodata]=useState('');
    const [isTrue,setIsTrue]=useState(false)
    const [total,setTotal]=useState(0)
    console.log(isTrue)
    useEffect(()=>{
        const favoriteItem=JSON.parse(localStorage.getItem('favorite'))
       
        if(favoriteItem){
            setFavoriteItem(favoriteItem)
        }
        else{
              setNodata('No Data Found')
        }

         
    },[])
    useEffect(()=>{
        const total=favoriteItem.reduce((previous,current)=>previous+current.price,0)
        setTotal(total)
    },[favoriteItem])

   
 

    const handleRemove=()=>{
        localStorage.removeItem('favorite')
        setTotal(0)
        setFavoriteItem([])
        
        setNodata('No Data Found')
        
    }
    
    return (
        <div>
                 
               <h1 className="p-5 font-bold text-3xl"> Total Cost:<span className="text-gray-600 font-semibold text-2xl">${total}</span></h1> 

             {
                
                nodata?<p className="text-center mt-32 font-bold text-4xl text-purple-600">{nodata}</p>
                :
                <div>
                {favoriteItem.length>0 && <button onClick={handleRemove} className= "text-white mt-5 ml-[500px] bg-violet-500 p-2 rounded">Delete All</button>}


                 <div className="mt-10 grid grid-cols-1 lg:grid-cols-3  mx-auto gap-6 w-[80%]">

                {
                    isTrue? favoriteItem.map(item=><FavoriteCard key={item.id} item={item}></FavoriteCard>): favoriteItem.slice(0,3).map(item=><FavoriteCard key={item.id} item={item}></FavoriteCard>)
                }

                </div>
                </div>
                
             }
          <div className="p-10">
          {
                isTrue?
                    favoriteItem.length>3 &&  <button  onClick={()=>setIsTrue(!isTrue)} className= "text-white mt-5 ml-[500px] bg-violet-400 p-2 rounded">Show Less</button>:favoriteItem.length>3 &&  <button  onClick={()=>setIsTrue(!isTrue)} className= "text-white mt-5 ml-[500px] bg-violet-600 p-2 rounded">Show All</button>
                
            }
          </div>
        </div>
    );
};

export default Favorite;