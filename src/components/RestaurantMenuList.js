import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
const RestaurantMenuList=({menu})=>{
    return (
      <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
          <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container px-56">
          {menu.map((item)=>(
            <div key={item?.card?.info?.id}>

{item?.categories ? (
            <RestaurantNestedItemCategory key={item.card?.info.id} nestedCategory={item} />
          ) : (
            <RestaurantItemCategory key={item.card?.info.id} itemCategory={item} />
          )}

            </div>


          ))} ; 
        </div>
      </div>
     
    )
}
export default RestaurantMenuList;