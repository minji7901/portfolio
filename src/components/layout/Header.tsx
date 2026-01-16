import Link from "next/link";

const Header = () => {
  return (
    <header className="position-fixed top-0 left-0 w-[200px] h-screen bg-white border-r border-base-primary px-4">
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
