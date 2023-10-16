import classNames from "classnames";
import Link from "next/link";
import { IconType } from "../svgs/icons.constants";
import Button, { ButtonVariants } from "./Button";
import Icon from "./Icon";

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const menuConfig = [
  {
    label: "Home",
    href: "/",
  },
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

const MobileMenu = ({ open, setOpen }: MobileMenuProps) => {
  return (
    <div
      className={classNames(
        "fixed top-0 bottom-0 pt-5 pb-6 px-4 bg-white z-50 transition-all max-w-sm w-full",
        {
          "right-0": open,
          "-right-[450px]": !open,
        }
      )}
    >
      <button
        className="absolute top-2 right-2 p-4 z-50"
        onClick={() => setOpen(false)}
      >
        <Icon type={IconType.X} />
      </button>
      <nav className="flex flex-col justify-between h-[calc(100%-56px)] mt-[56px]">
        <ul className="mb-6">
          {menuConfig.map(({ label, href }) => (
            <li className="mb-8" key={label}>
              <Link href={href} className="font-f4 text-black">
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-[45px]">
            <Button variant={ButtonVariants.PRIMARY} href="/pricing">
              Subscribe now
            </Button>
          </li>
        </ul>
        <footer>
          <ul>
            <li className="flex mb-6 ">
              <Link
                href="https://instagram.com/browning.fitness?igshid=MmIzYWVlNDQ5Yg%3D%3D"
                className="mr-2 w-[20px] h-[20px] text-grey2"
              >
                <Icon type={IconType.INSTAGRAM} />
              </Link>
              <Link
                className="mr-2 w-[20px] h-[20px] text-grey2"
                href="https://youtube.com/@BrowningFitness"
              >
                <Icon type={IconType.YT} />
              </Link>
              <Link
                className="mr-2 w-[20px] h-[20px] text-grey2"
                href="https://www.tiktok.com/@ogden.athletes?_r=1&_t=8cb3nN61ikY"
              >
                <Icon type={IconType.TIKTOK} />
              </Link>
            </li>
            <li className="font-base text-grey2 mb-6">
              <a href="tel:360-936-5739">360-936-5739</a>
            </li>
            <li className="font-base text-grey2 mb-6">
              <a href="mailto:zak.lyle.browning@gmail.com">
                zak.lyle.browning@gmail.com
              </a>
            </li>
          </ul>
        </footer>
      </nav>
    </div>
  );
};

export default MobileMenu;
