"use client";

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Button, { ButtonVariants } from "./Button";
import Burger from "./Burger";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { signIn, signOut, useSession } from "next-auth/react";

const navConfig = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export enum HeaderVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type HeaderProps = {
  variant: HeaderVariants;
};

const Header = ({ variant }: HeaderProps) => {
  const { data: session, status } = useSession();
  const [isOpen, setOpen] = useState(false);
  const isPrimary = variant === HeaderVariants.PRIMARY;
  return (
    <header
      className={classNames(
        "flex justify-between items-center px-4 py-3 lg:px-10 lg:py-6",
        {
          "bg-primary text-white": !isPrimary,
        }
      )}
    >
      <Link href="/">
        <Image src="/logo.jpeg" width={48} height={48} alt="company logo" />
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center">
          {navConfig.map(({ label, href }) => (
            <li key={label} className="mr-8 ">
              <Link href={href}>{label}</Link>
            </li>
          ))}
          <li>
            {status !== "loading" && !session ? (
              <p className="mr-10 cursor-pointer" onClick={() => signIn()}>
                Sign in
              </p>
            ) : (
              <p className="mr-10 cursor-pointer" onClick={() => signOut()}>
                Sign out
              </p>
            )}
          </li>
          <li>
            <Button
              variant={
                isPrimary ? ButtonVariants.PRIMARY : ButtonVariants.WHITE
              }
              href="/pricing"
            >
              Subscribe now
            </Button>
          </li>
        </ul>
      </nav>
      <Burger setOpen={setOpen} isPrimary={isPrimary} />
      <MobileMenu open={isOpen} setOpen={setOpen} />
    </header>
  );
};

export default Header;
