import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";
const RestaurantMenuList=({menu})=>{
    return (
      <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
          <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container px-56">
          {menu.map((item,index)=>(
            <div key={index}>

{item?.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}

            </div>


          ))} ; 
        </div>
      </div>
     
    )
}
export default RestaurantMenuList;