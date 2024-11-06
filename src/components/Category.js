const { default: CarrousselCat } = require("./CarrousselCat")

const Category = ()=>{

    return(
<div className="container">
    <h2 className="text-3xl font-semibold">Categories</h2>
<CarrousselCat/>
</div>
    )
}

export default Category;