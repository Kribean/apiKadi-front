import Image from "next/image";

const CardProduct = () => {
  return (
    <div className="flex flex-row lg:flex-col w-fit lg:w-1/4 border-[1px] border-[#0B6434] rounded p-[20px]">
      <div className="flex flex-col justify-center items-center">
        <div className="avatar">
          <div className="w-24 rounded">
            <Image src="/images/fruitsFeat.png" width={50} height={50} />
          </div>
        </div>
        <h3>Titre du magazin</h3>
      </div>
      <div className="flex flex-col">
        <p>localisation</p>
        <p>prix</p>
        <div className="flex flex-row w-full justify-center items-center">
        <button className="btn rounded-none text-[#FFFFFF] bg-[#0B6434] w-[154px] h-[44px] ">Ajouter à la liste</button>
        </div>

      </div>
    </div>
  );
};

export default CardProduct;
