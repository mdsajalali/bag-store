import { ReactNode } from "react";

interface childrenProps {
  children: ReactNode;
}
const Container = ({ children }: childrenProps) => {
  return <div className="max-w-[1200px] mx-auto px-4 md:px-0">{children}</div>;
};

export default Container;
