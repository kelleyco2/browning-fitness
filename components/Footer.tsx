import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Logo@2x-2.png";
import Icon from "./Icon";
import { IconType } from "../svgs/icons.constants";

const footerNavConfig = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Dashboard",
    href: "/Dashboard",
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

const Footer = () => {
  return (
    <footer className="flex flex-col text-grey3">
      <div className="bg-black px-4 md:px-10 py-12 border-b-[1px] border-grey1">
        <nav className="">
          <ul className="flex flex-col md:flex-row md:items-center">
            <li className="mb-12 md:mb-0 md:mr-10">
              <Link href="/">
                <Image
                  src="/logo.jpeg"
                  alt="footer logo"
                  width={32}
                  height={32}
                  // className="max-w-[168px] h-10"
                />
              </Link>
            </li>
            {footerNavConfig.map(({ label, href }) => (
              <li
                key={label}
                className="mb-8 last-of-type:mb-0 md:mb-0 md:mr-10"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-black px-4 md:px-10 py-6 flex flex-col-reverse md:flex-row justify-between">
        <ul className="flex flex-col-reverse md:flex-row">
          {[
            `© ${new Date().getFullYear()} Copyright`,
            `Legal`,
            `Privacy Policy`,
          ].map((label) => (
            <li key={label} className="mb-8 md:mb-0 md:mr-6">
              <Link href="/">{label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex mb-8 md:mb-0">
          <Link
            href="https://instagram.com/browning.fitness?igshid=MmIzYWVlNDQ5Yg%3D%3D"
            className="mr-6 w-[20px] h-[20px] text-grey2"
          >
            <Icon type={IconType.INSTAGRAM} />
          </Link>
          <Link
            className="mr-6 w-[20px] h-[20px] text-grey2"
            href="https://youtube.com/@BrowningFitness"
          >
            <Icon type={IconType.YT} />
          </Link>
          <Link
            className="mr-6 w-[20px] h-[20px] text-grey2"
            href="https://www.tiktok.com/@ogden.athletes?_r=1&_t=8cb3nN61ikY"
          >
            <Icon type={IconType.TIKTOK} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
