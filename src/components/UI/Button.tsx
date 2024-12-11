import { ComponentPropsWithoutRef } from "react";

type LinkClassMode = {
  mode: "low" | "med" | "high";
};

// type ButtonFn = {
//   handleClick: () => void;
// };

type LinkProps = {
  el: "a";
} & LinkClassMode &
  ComponentPropsWithoutRef<"a">;

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

export default function Button(props: LinkProps | ButtonProps) {
  const { el, children } = props;
  if (el === "a") {
    const { mode } = props;
    return (
      <a className={`link-${mode}`} {...props}>
        {children}
      </a>
    );
  }
  return <button {...props}>{children}</button>;
}
