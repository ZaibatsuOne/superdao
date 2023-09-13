"use client";

import { Button } from "../../shared/ui/button/button";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { motion } from "framer-motion";
import { navbarLink } from "@/data/data";

const Navbar: FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 7 }}
      className="mx-auto container py-8 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="Superdao logo" />
        <h4 className="font-semibold text-2xl">Superdao</h4>
      </div>
      <nav>
        <ol className="flex items-center gap-11">
          {navbarLink.map((link) => (
            <Link href={`/${link.link}`} key={link.title}>
              <li className="link">{link.title}</li>
            </Link>
          ))}
        </ol>
      </nav>
      <Button variant="secondary" size="sm">
        Login
      </Button>
    </motion.header>
  );
};

export default Navbar;
