import Image from "next/image";

const Header = () => {
    return (
        <header className="flex justify-center my-4">
            <Image
                src="/logo.png"
                width={70}
                height={70}
                alt={`logo`}
            />
        </header>
    )
};

export default Header;
