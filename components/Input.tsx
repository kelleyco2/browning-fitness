import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

type InputProps = {
  name: string;
  label: string;
  value: string | null;
  setValue: Dispatch<SetStateAction<string | null>>;
  className?: string;
  textarea?: boolean;
  textareaClassName?: string;
};

const Input = ({
  name,
  label,
  value,
  setValue,
  className,
  textarea,
  textareaClassName,
  ...props
}: InputProps) => {
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.currentTarget.value);
  return (
    <div
      className={classNames(
        "relative flex flex-col input-container",
        className
      )}
    >
      {textarea ? (
        <textarea
          name={name}
          value={value ?? ""}
          onChange={handleChange}
          className={classNames(
            "border-2 border-grey4 bg-grey4 pt-5 px-3 pb-2",
            { "border-error": value === null },
            textareaClassName
          )}
          {...props}
        />
      ) : (
        <input
          name={name}
          value={value ?? ""}
          onChange={handleChange}
          className={classNames(
            "border-2 border-grey4 bg-grey4 pt-5 px-3 pb-2",
            { "border-error": value === null }
          )}
        />
      )}

      <label
        htmlFor={name}
        className={`absolute pointer-events-none transform translate-x-4 translate-y-[18px] scale-100 origin-top-left duration-200 ease-out text-grey1 font-base ${
          value && "filled"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
