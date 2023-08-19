import classNames from "classnames";

type BurgerProps = {
  isPrimary: boolean;
  setOpen: (bool: boolean) => void;
};

const Burger = ({ isPrimary, setOpen }: BurgerProps) => {
  const sharedClasses = classNames("h-[2px]", {
    "bg-black": isPrimary,
    "bg-white": !isPrimary,
  });

  return (
    <div
      className="flex flex-col justify-around w-8 h-8 p-2 md:hidden"
      onClick={() => setOpen(true)}
    >
      <div className={sharedClasses} />
      <div className={sharedClasses} />
      <div className={sharedClasses} />
    </div>
  );
};

export default Burger;
