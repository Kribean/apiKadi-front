const Hero = () => {
  return (
      <header className="flex flex-col lg:flex-row justify-between bg-[#0B6434] py-4">

        <div className="px-4 w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-[#FFFFFF]">ApiKADI</h1>
          <p className="py-6 text-[#FFFFFF]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-white text-[#0B6434] rounded-none">Get Started</button>
        </div>
        <img
          src="images/vegetable_hero.png"
          className=" w-fit lg:w-1/2 object-fill"
        />
      </header>
  );
};

export default Hero;
