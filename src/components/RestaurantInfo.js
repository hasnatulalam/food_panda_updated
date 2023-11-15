import { RES_IMG_CDN } from "../utils/constants";
import { AiFillStar } from "react-icons/ai";
const RestaurantInfo=(props)=>{ 
  const {resInfo}=props
  const {cloudinaryImageId, areaName, avgRating,costForTwo,deliveryTime,sla,  cuisines}=resInfo
  
     return (
      <div className="flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
      <img
        className="w-[254px] h-[165px] mob:w-[130px] mob:[81px]"
        src={RES_IMG_CDN + resInfo?.cloudinaryImageId}
        alt={resInfo?.name}
      />
      <div className="flex flex-col basis-[540px] m-5 ">
        <h2 className="text-3xl max-w-[538px] font-semibold">
          {resInfo?.name}
        </h2>
        <p className="overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">
          {resInfo?.cuisines.join(", ")}
        </p>
        <div className="flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[342px] mob:text-xs mob:font-normal">
          <div className="flex items-center px-1 py-0 gap-1">
            <AiFillStar />
            <span>{resInfo?.avgRating}</span>
          </div>
          <div>|</div>
          <div>{resInfo?.sla.slaString}</div>
          <div>|</div>
          <div>{resInfo?.costForTwoMsg}</div>
        </div>
      </div>
    </div>
    );
};
export default RestaurantInfo;