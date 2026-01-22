const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white   border-b-2 border-base-primary z-10">
      <div className="flex items-center justify-between max-w-container mx-auto h-20">
        <h1 className="text-3xl font-bold">✶MJ</h1>
        <nav className="flex items-center gap-5 text-lg font-semibold">
          <a href="#hero" className="text-primary-dark">
            Hero
          </a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
