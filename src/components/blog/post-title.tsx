import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-none mb-6 md:mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
