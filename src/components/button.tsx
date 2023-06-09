import { ReactNode } from "react";
import cx from "classnames";

interface ButtonType {
  children: ReactNode;
  onClick: () => void;
  type?: "error" | "primary" | "basic";
  disabled?: boolean;
}

const Button = ({
  children,
  type = "primary",
  onClick,
  disabled,
  ...rest
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={cx(
        "py-2 px-4 rounded-full font-semibold",
        type === "error"
          ? "text-white bg-[#ED4C5C]"
          : type === "basic"
          ? "text-gray-500 bg-[#F4F4F4]"
          : "text-white bg-primary"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
