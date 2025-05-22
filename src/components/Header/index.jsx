import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center my-4" role="banner">
      <Link
        href="/"
        aria-label="Back to homepage"
        title="Home page"
      >
        <Image
          src="/logo.png"
          width={70}
          height={70}
          alt="Store brand"
          priority
        />
      </Link>
    </header>
  );
};

export default Header;
