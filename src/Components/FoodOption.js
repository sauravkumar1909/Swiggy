import { imageGridCards } from "../Utils/FoodData"
import Foodcard from "./FoodCard"

export default function FoodOption(){

    return (
        <>
          <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
            {
                imageGridCards.map((FoodData)=><Foodcard key={FoodData.id} foodData={FoodData}></Foodcard>)
            }
          </div>
        </>
    )
}