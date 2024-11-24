const { default: Image } = require("next/image");

const FeatureSection = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-semibold">Fonctionnalités</h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col w-full lg:w-1/2 bg-[#C8A938] justify-center gap-4 items-center rounded">
        <p>Evaluer le meilleur prix de vos produits</p>
          <h3 className="font-semibold text-5xl text-center"> Optimisation Markeking</h3>
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
            <div className="flex flex-col mr-2">
              <p>Gain de temps concernant la veille</p>
              <a href='https://forms.gle/Q4fh52CduP8X7u2P8' target='_blank' rel='noopener noreferrer' className="btn btn-neutral rounded-none">Nous contacter</a>
            </div>{" "}
          </div>
          <div className="flex flex-row justify-bewteen bg-gradient-to-r from-[#FF9564] to-[#FA9564] h-1/2 rounded w-full ">
            <Image alt="fruit" src={"/images/fruitsFeat.png"} width={300} height={300} className="w-36 lg:w-fit" />
            <div className="flex flex-col mr-2">
              <p>Données renouvellées continuellement sur une très vaste gamme de fruits et légumes avec le prix au kilos</p>
              <a href='https://forms.gle/Q4fh52CduP8X7u2P8' target='_blank' rel='noopener noreferrer' className="btn btn-neutral rounded-none">Nous contacter</a>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
