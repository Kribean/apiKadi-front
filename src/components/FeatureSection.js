const { default: Image } = require("next/image");

const FeatureSection = () => {
  return (
    <div className=" container">
      <h2>Fonctionnalités</h2>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col w-1/2 bg-[#C8A938] justify-center gap-4 items-center rounded">
          <p>rrrrrrrrrrrr</p>
          <h3>ffffffffffffff</h3>
          <Image
            src={"/images/vegetablefeature.png"}
            width={500}
            height={400}
          />
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-row justify-bewteen bg-gradient-to-r from-[#FD5151] to-transparent h-1/2 rounded">
            <Image src={"/images/fruitsFeat.png"} width={300} height={300} />
            <div className="flex flex-col">
              <p>hello</p>
              <button className="btn btn-neutral rounded-none">bouton</button>
            </div>{" "}
          </div>
          <div className="flex flex-row justify-bewteen bg-gradient-to-r from-[#FF9564] to-transparent h-1/2 rounded">
            <Image src={"/images/fruitsFeat.png"} width={300} height={300} />
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
