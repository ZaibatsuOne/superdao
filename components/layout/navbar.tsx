import { FC } from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const Navbar: FC = () => {
  return (
    <header className="mx-auto container">
      <Image src={Logo} alt="Superdao logo" />
    </header>
  );
};

export default Navbar;
