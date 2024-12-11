import {
  type ComponentPropsWithoutRef,
  type ElementType,
  //   type ReactNode,
} from "react";

// Element Type will help find what element we want to use as the container
type ContainerProps<T extends ElementType> = {
  as?: T;
  //   children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  children,
  as,
  ...otherProps
}: ContainerProps<C>) {
  const Container = as || "div";
  return <Container {...otherProps}>{children}</Container>;
}
