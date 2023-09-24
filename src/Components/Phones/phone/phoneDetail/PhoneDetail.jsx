import swal from 'sweetalert';

import { useEffect, useState } from "react";
import {  useLoaderData, useNavigate, useParams } from "react-router-dom";

const PhoneDetail = () => {
    const [phone,setPhone]=useState({})
  
      const {id}=useParams()
      
    //   console.log(IntId)
      const phones=useLoaderData()
      

     useEffect(()=>{
        const detail= phones?.find(phone=>phone.id===id)
        setPhone(detail)
        // console.log(detail)
     },[id,phones])


const { phone_name, brand_name,image }=phone;
const navigate=useNavigate();
const handleAddToFavorite=()=>{
    
    // localStorage.setItem('test',JSON.stringify(phone))
    const favoriteItemArray=[]
    const favoriteItem=JSON.parse(localStorage.getItem('favorite'))
    if(!favoriteItem){
        favoriteItemArray.push(phone)
        localStorage.setItem('favorite',JSON.stringify(favoriteItemArray))
        swal("Succes!", "Successfully added product!", "success");
        navigate(-1)


    }
    else{
      const isExist=favoriteItem?.find(phone=>phone.id===id)

      if(!isExist){
        favoriteItemArray.push(...favoriteItem,phone)
        localStorage.setItem('favorite',JSON.stringify(favoriteItemArray))
        swal("Succes!", "Successfully added product!", "success");
        navigate(-1)
      }
      else{
       
        swal("Error!", "Already Exist!", "error");
        navigate(-1)
      }
         
       
    }

    
}


    return (
        <div>
            <div className="h-2/6 bg-green-200 rounded-lg py-20 my-12 ">
                  <h1 className="flex items-center justify-center text-4xl font-semibold   text-violet-950">Phone Details</h1>
            </div>
               <div>
                     <div className="flex gap-2 shadow-xl w-[40%] mx-auto">
                        <img className="w-[50%]" src={image} alt="" />
                         <div className="w-[50%]">
                            <h1 className="text-red-400 mt-12 font-bold text-2xl text-center">{brand_name}</h1>
                            <h1 className=" font-bold text-2xl text-center">{phone_name}</h1>
                            <button onClick={handleAddToFavorite}   className="bg-sky-300 w-[90%] mx-auto mt-5 rounded-lg p-2 hover:bg-green-200 text-red-400">Add To Favorite</button>

  
                         </div>
                     </div>
               </div>
        </div>
    );
};

export default PhoneDetail;