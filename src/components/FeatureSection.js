const { default: Image } = require("next/image");

const FeatureSection = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-semibold">Fonctionnalités</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full lg:w-1/2 bg-[#C8A938] justify-center gap-4 items-center rounded">
          <p>rrrrrrrrrrrr</p>
          <h3 className="font-semibold text-5xl">BIG SALE</h3>
          <Image
          alt="legume"
            src={"/images/vegetablefeature.png"}
            width={500}
            height={400}
            className="w-fit"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-4">
          <div className="flex flex-row justify-bewteen bg-gradient-to-r from-[#FD5151] to-[#FA8787] h-1/2 rounded">
            <Image alt="fruit" src={"/images/fruitsFeat.png"} width={300} height={300} className="w-36 lg:w-fit" />
            <div className="flex flex-col">
              <p>hello</p>
              <button className="btn btn-neutral rounded-none">bouton</button>
            </div>{" "}
          </div>
          <div className="flex flex-row justify-bewteen bg-gradient-to-r from-[#FF9564] to-[#FA9564] h-1/2 rounded w-full">
            <Image alt="fruit" src={"/images/fruitsFeat.png"} width={300} height={300} className="w-36 lg:w-fit" />
            <div className="flex flex-col">
              <p>hello</p>
              <button className="btn btn-neutral rounded-none">bouton</button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
