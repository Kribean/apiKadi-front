import CardProduct from "./CardProduct";
import FilterCompo from "./FilterCompo/FilterCompo";


const ProductContainer = ({products})=>{

    return(<div className="flex flex-col w-full relative">
        <h2 className="text-3xl font-semibold">Articles</h2>
<div className=" flex flex-col-reverse gap-4">
    <div className="flex flex-col w-full h-full sticky top-0 bottom-0 max-h-screen overflow-y-auto z-20">
    <FilterCompo/>
    </div>
    <div className="flex flex-wrap w-full  justify-center gap-2 lg:gap-4 p-2 z-10">
    {products?.map((e,index)=>{return(
    <CardProduct
    key={index}
    nameArticle={e.nameArticle}
    isFruit={e.isFruit}
    is_sold_by_unit={e.is_sold_by_unit}
    createdAt={e.createdAt}
    grocery={e.grocery}
    is_promotion_label={e.is_promotion_label}
    raw_data={e.raw_data}
    price_per_unit={e.price_per_unit}
    price_per_kilo={e.price_per_kilo}
    lat={e.lat}
    long={e.long}/>)})}

        </div>
</div>

    </div>)
}

export default ProductContainer;