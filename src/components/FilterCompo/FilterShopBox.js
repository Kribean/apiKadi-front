'use client'

import { useState } from "react"

export default function FilterShopBox()
{
    const [tabChoose,setTabChoose]=useState([])
    const dataImg=[
        {title:"aldi",src:"logos_shop/aldi.png"},
        {title:"auchan",src:"logos_shop/auchan.png"},
        {title:"biocop",src:"logos_shop/biocoop.jpg"},
        {title:"carrefour",src:"logos_shop/carrefour.png"},
        {title:"casino",src:"logos_shop/casino.png"},
        {title:"cora",src:"logos_shop/cora.png"},
        {title:"franprix",src:"logos_shop/franprix.jpg"},
        {title:"grand frais",src:"logos_shop/grandfrais.png"},
        {title:"intermarché",src:"logos_shop/intermarche.png"},
        {title:"leaderprice",src:"logos_shop/leaderprice.jpg"},
        {title:"leclerc",src:"logos_shop/leclerc.png"},
        {title:"lidl",src:"logos_shop/lidl.png"},
        {title:"monoprix",src:"logos_shop/monoprix-logo.jpg"},
        {title:"naturalia",src:"logos_shop/naturalia.png"},
        {title:"super u",src:"logos_shop/superu.png"},
        {title:"grand frais",src:"logos_shop/grandfrais.png"},
    ]
    

    return(
        <div className="flex flex-wrap">
            {dataImg.map((e,index)=><ItemShop key={index} e={e} tabChoose={tabChoose} setTabChoose={setTabChoose}/>)}
        </div>
    )
}

const ItemShop = ({e,tabChoose,setTabChoose})=>{
    const [isChoose,setIsChoose]=useState(false)
    const handleChoice = (title)=>{
        if(isChoose && title)
        {
            setIsChoose(false);
            setTabChoose([...tabChoose, title])
        }else{
            setIsChoose(true)
            setTabChoose(tabChoose.filter((e)=>e!==title))
        }
    }
    return(
<div onClick={()=>{handleChoice(e.title)}} className="flex flex-col m-2 justify-center items-center text-center h-fit gap-2 w-16 ">
<div className="avatar w-8 lg:w-10">
  <div className={isChoose ?" ring-primary "+" ring-offset-base-100 w-24 rounded-full ring ring-offset-2":""}>
    <img src={"/images/"+e.src} alt="magazin" />
  </div>
</div>
<p className="w-16 text-xs break-all">{e.title}</p>
</div>
    )
}