import { MENU_API } from "./constants.js";
import { useState,useEffect } from "react";
const useRestaurantMenu=(resId)=>{
  const [resInfo,setResInfo]=useState(null);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData=async()=>{
  try {
      const data =await fetch(MENU_API + resId)
    const json =await data.json();
    const menuItemsList = json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;  
   const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

    const menu = menuItemsList.map(item => {
      if((item?.card?.["card"]?.["@type"] === itemCategory) || (item?.card?.["card"]?.["@type"] === NestedItemCategory) ) {
        return item?.card?.card
      }
   })
   const modifiedData = {
    info:json?.data.cards[0]?.card?.card?.info,
    menu :menu.filter(x=>x!==undefined),
  };
  setResInfo(modifiedData)
        
   } catch (error) {
       // console.log(error); 
 } 
    
};
      
return resInfo;
 }
  

export default useRestaurantMenu;