import Image from "next/image";
import LogoGrocery from "./LogoGrocery";

const CardProduct = ({
  nameArticle,
  isFruit,
  is_sold_by_unit,
  createdAt,
  grocery,
  is_promotion_label,
  raw_data,
  price_per_unit,
  price_per_kilo,
  lat,
  long,
}) => {
  const date = new Date(createdAt);
  
  // Options pour formater la date en français
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  // Utilisation de toLocaleDateString pour formater la date
  const formattedDate = date.toLocaleDateString('fr-FR', options);
  return (
<div className="flex flex-row lg:flex-col w-full lg:w-1/3 border border-[#0B6434] rounded-lg shadow-lg p-6 bg-white space-y-4">
  <div className="flex flex-col items-center text-center space-y-3">
    <div className="avatar">
      <div className="w-24 h-24 rounded-full border-2 border-[#0B6434] overflow-hidden">
        <LogoGrocery grocery={grocery} />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{nameArticle}</h3>
  </div>

  <div className="flex flex-col space-y-3">
    <div className="flex justify-end">
      {is_promotion_label && (
        <div className="badge badge-error bg-red-600 text-white px-2 py-1 rounded-lg font-semibold text-xs">
          Produit en promotion
        </div>
      )}
    </div>
    <p className="text-sm text-gray-500">Edité le : {formattedDate}</p>
    <p className="text-sm text-gray-500">Localisation : Toulouse</p>

    {price_per_kilo && (
      <p className="text-lg font-bold text-[#0B6434]">
        Prix au kilo : <span className="text-black">{price_per_kilo}</span>
      </p>
    )}
    {price_per_unit && (
      <p className="text-lg font-bold text-[#0B6434]">
        Prix à l'unité : <span className="text-black">{price_per_unit}</span>
      </p>
    )}

    <p className="text-sm text-gray-700">
      <span className="font-semibold">Description :</span> {raw_data}
    </p>

    <div className="flex justify-center mt-4">
      <button className="btn rounded-md text-white bg-[#0B6434] hover:bg-[#094f2a] px-6 py-2 font-medium w-full max-w-xs">
        Ajouter au memo
      </button>
    </div>
  </div>
</div>

  );
};

export default CardProduct;
