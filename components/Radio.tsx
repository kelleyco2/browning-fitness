import classNames from "classnames";

type RadioProps = {
  name: string;
  label: string;
  className?: string;
};

const Radio = ({ name, label, className }: RadioProps) => {
  return (
    <label className={classNames("radio", className)}>
      <input type="radio" name={name} />
      {label}
    </label>
  );
};

export default Radio;
