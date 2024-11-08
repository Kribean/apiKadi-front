import Image from "next/image";

const LogoGrocery = ({grocery})=>{
const dataImg=[
    {listUntitled:["aldi","alldi"],src:"logos_shop/aldi.png"},
    {listUntitled:["auchan","auuchaan","auuchan"],src:"logos_shop/auchan.png"},
    {listUntitled:["biocop","biocoop"],src:"logos_shop/biocoop.jpg"},
    {listUntitled:["carefour","carrefour"],src:"logos_shop/carrefour.png"},
    {listUntitled:["casino"],src:"logos_shop/casino.png"},
    {listUntitled:["cora"],src:"logos_shop/cora.png"},
    {listUntitled:["franprix"],src:"logos_shop/franprix.jpg"},
    {listUntitled:["grandfrais","grand_frais"],src:"logos_shop/grandfrais.png"},
    {listUntitled:["intermarche","intermarché"],src:"logos_shop/intermarche.png"},
    {listUntitled:["leaderprice"],src:"logos_shop/leaderprice.jpg"},
    {listUntitled:["leclerc"],src:"logos_shop/leclerc.png"},
    {listUntitled:["lidl"],src:"logos_shop/lidl.png"},
    {listUntitled:["monoprix"],src:"logos_shop/monoprix-logo.jpg"},
    {listUntitled:["naturalia"],src:"logos_shop/naturalia.png"},
    {listUntitled:["superu"],src:"logos_shop/superu.jpg"},
    {listUntitled:["grandfrais","grand_frais"],src:"logos_shop/grandfrais.png"},
]

const groceryForFilt = grocery.toLowerCase().replace(/\s+/g, '');

const srcImg = dataImg.find(element =>
    element.listUntitled.some(e => groceryForFilt.includes(e) || e.includes(groceryForFilt))
)?.src;


    return(
        <Image
        alt="representation"
        src={srcImg?`/images/${srcImg}`:"/images/fruitsFeat.png"}
        width={100}
        height={100}
        className="w-4 h-4 object-contain"
      />
    )
}

export default LogoGrocery;