import {
  type ButtonHTMLAttributes,
  type FC,
  type PropsWithChildren,
} from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      style={{
        backgroundColor: rest.disabled ? "gray" : "white",
        color: "black",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
