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
    label: "Services",
    href: "/",
  },
  {
    label: "Portfolio",
    href: "/",
  },
  {
    label: "About",
    href: "/",
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
            <Button variant={ButtonVariants.PRIMARY} href="/">
              Work with us
            </Button>
          </li>
        </ul>
        <footer>
          <ul>
            <li className="flex mb-6">
              <Link href="/" className="mr-6">
                <Icon type={IconType.FB} />
              </Link>
              <Link href="/">
                <Icon type={IconType.LINKEDIN} />
              </Link>
            </li>
            <li className="font-base text-grey2 mb-6">
              <a href="tel:801-628-8299">801-628-8299</a>
            </li>
            <li className="font-base text-grey2 mb-6">
              <a href="mailto:brian@capitalviewaccounting.com">
                brian@capitalviewaccounting.com
              </a>
            </li>
            <li>
              <address className="not-italic">
                <p className="font-base text-grey2">3084 S 1900 W,</p>
                <p className="font-base text-grey2">Ogden, Utah 84401</p>
                <p className="font-base text-grey2">United States</p>
              </address>
            </li>
          </ul>
        </footer>
      </nav>
    </div>
  );
};

export default MobileMenu;
