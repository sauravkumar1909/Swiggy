

export default function Grocerycard({FoodData})
{

    return(
        <div className="flex-none">
        <a href={FoodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h1 className="text-center font-bold">{FoodData?.action?.text}</h1>
        </div>
    )
}