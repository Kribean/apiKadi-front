import CardProduct from "./CardProduct";


const ProductContainer = ()=>{

    return(<div className="flex flex-col lg:px-[200px] w-full">
        <h2 className="text-3xl font-semibold">Articles</h2>
        <div className="flex flex-wrap w-full justify-center gap-2 lg:gap-4 p-2">
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
<CardProduct/>
        </div>

    </div>)
}

export default ProductContainer;