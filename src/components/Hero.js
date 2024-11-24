const Hero = () => {
  return (
      <header className="flex flex-col lg:flex-row justify-between bg-[#0B6434] py-4">

        <div className="px-4 w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-[#FFFFFF]">ApiKADI</h1>
          <p className="py-6 text-[#FFFFFF]">
            
API centralisant les prix des fruits et légumes des enseignes toulousaines, permettant aux marchands d'optimiser leurs ventes grâce à une meilleure gestion et comparaison.
          </p>
          <a href='https://forms.gle/Q4fh52CduP8X7u2P8' target='_blank' rel='noopener noreferrer' className="btn btn-white text-[#0B6434] rounded-none">Evaluer l'application</a>
        </div>
        <img
          src="images/vegetable_hero.png"
          className=" w-fit lg:w-1/2 object-fill"
        />
      </header>
  );
};

export default Hero;
