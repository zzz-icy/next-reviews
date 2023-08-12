// import { orbitron } from "@/app/fonts";
import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return (
    // <h1 className={`font-bold text-2xl pb-3 ${orbitron.className}`}>
    <h1 className={`font-bold text-2xl pb-3 font-orbitron`}>{children}</h1> //
  );
};
export default Heading;
