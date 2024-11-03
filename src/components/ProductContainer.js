import CardProduct from "./CardProduct";


const ProductContainer = ()=>{

    return(<div className="flex flex-col px-[200px] w-full">
        <h2>Articles</h2>
        <div className="flex flex-wrap w-full justify-center gap-4">
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