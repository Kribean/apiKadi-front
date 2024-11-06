import Image from "next/image";

const CardProduct = () => {
  return (
    <div className="flex flex-row lg:flex-col w-full lg:w-1/4 border-[1px] border-[#0B6434] rounded p-[20px]">
      <div className="flex flex-col justify-center items-center">
        <div className="avatar">
          <div className="w-24 rounded">
            <Image alt="representation" src="/images/fruitsFeat.png" width={50} height={50} />
          </div>
        </div>
        <h3>Titre du magazin</h3>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-end">
          <div className="badge badge-error gap-2">
            Produit en promotion
          </div>
        </div>
        <p>Edité le: </p>
        <p>localisation: </p>
        <p>prix au kilo: </p>
        <p>prix à l'unité: </p>
        <p>Description: </p>
        <div className="flex flex-row w-full justify-center items-center">
          <button className="btn rounded-none text-[#FFFFFF] bg-[#0B6434] w-[154px] h-[44px] ">
            Ajouter à la liste
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
