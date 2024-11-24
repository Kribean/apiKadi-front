const Navbar = () => {
  return (
    <div className="flex flex-row bg-base-100 w-full m-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ApiKadi</a>
      </div>
      <div className="flex-none ">
<a href='https://forms.gle/Q4fh52CduP8X7u2P8' target='_blank' rel='noopener noreferrer' className="btn btn-success rounded-none">Evaluer l'application</a>
      </div>
    </div>
  );
};

export default Navbar;
