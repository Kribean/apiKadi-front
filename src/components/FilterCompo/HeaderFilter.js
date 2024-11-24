export default function HeaderFilter({choiceFilter,setChoiceFilter,setShowFilter}){

    return(
        <div role="tablist" className="tabs tabs-lifted w-full">
  <a onClick={()=>{setChoiceFilter(0);setShowFilter(true)}} role="tab" className={`tab ${choiceFilter===0&&" tab-active text-primary "} `}>Localisation et Date</a>
  <a
  onClick={()=>{setChoiceFilter(1);setShowFilter(true)}}
    role="tab"
    className={`tab ${choiceFilter===1&&" tab-active text-primary "} `}>
    Marques
  </a>
  <a
  onClick={()=>{setChoiceFilter(2);setShowFilter(true)}}
  role="tab"
  className={`tab ${choiceFilter===2&&" tab-active text-primary "} `}
  >Produits</a>
</div>
    )
}