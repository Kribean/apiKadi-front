import CardCatego from "./CardCatego";

const CarrousselCat = () => {
  const data = [
    { srcImg: "images/legume_icon.png", altImg: "legume", title: "Fruits" },
    { srcImg: "images/legume_icon.png", altImg: "legume", title: "Légumes" },
  ];
  return (
    <div className="flex flex-wrap w-full gap-4">
      {data?.map((e, index) => {
        return <CardCatego key={index} srcImg={e.srcImg} altImg={e.altImg} title={e.title} />;
      })}
    </div>
  );
};

export default CarrousselCat;
