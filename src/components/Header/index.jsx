import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-center my-4">
            <Link href="/" prefetch>
              <Image
                  src="/logo.png"
                  width={70}
                  height={70}
                  alt={`logo`}
              />
            </Link>
        </header>
    )
};

export default Header;
