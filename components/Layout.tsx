import Navbar from "./Navbar";
import Burger from "./Navbar/Burger";
import Menu from "./Navbar/Menu";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
      <main>{children}</main>
    </>
  );
}
