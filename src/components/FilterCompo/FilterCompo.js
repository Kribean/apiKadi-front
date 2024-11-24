"use client"
import { useState } from 'react';
import DateGeoBox from './DateGeoBox';
import FilterShopBox from './FilterShopBox';
import HeaderFilter from './HeaderFilter';
import ProducBox from './ProducBox';

function FilterCompo() {
  const [choiceFilter,setChoiceFilter]=useState(1)
  return (
    <div className="flex flex-col p-4">
      <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
        <div className='flex flex-row w-full block mb-4'>
        <HeaderFilter choiceFilter={choiceFilter} setChoiceFilter={setChoiceFilter}/>
        </div>
        <span className="text-xs font-bold">Fonctionnalité non disponnible pour la version test, vous souhaiteriez avoir ces fonctionnalités? Faites le nous savoir dans notre formulaire:
          <a href='https://forms.gle/Q4fh52CduP8X7u2P8' target='_blank' rel='noopener noreferrer' className='btn btn-xs btn-success'>Évaluer l'application</a>
        </span>
        {choiceFilter===0&&<DateGeoBox />}
        {choiceFilter===1&&<FilterShopBox />}
        {choiceFilter===2&&<ProducBox />}
      </div>
    </div>
  );
}

export default FilterCompo;
