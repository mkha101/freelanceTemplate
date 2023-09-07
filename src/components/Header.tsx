import { useState } from "react";
import { Container } from "./Container.tsx";
import { Button } from "./ui/button.tsx";
import { X, Menu } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-blue-50 sticky top-0  max-w-screen">
      <Container>
        <>
          <nav className="hidden sm:flex flex-row items-center py-5 px-3  justify-between">
            <a href="/">
              <h1 className="hover:text-blue-500 font-bold text-2xl">Logo</h1>
            </a>
            <ul className="flex flex-row text-black gap-6">
              <li className="decoration-[3px] underline-offset-4 hover:text-blue-500 font-semibold">
                <a href="/">Nav</a>
              </li>
              <li className="decoration-[3px] underline-offset-4 hover:text-blue-500 font-semibold">
                <a href="/">Bar</a>
              </li>
              <li className="decoration-[3px] underline-offset-4 hover:text-blue-500 font-semibold">
                <a href="/">Items</a>
              </li>
            </ul>
          </nav>
          <nav className=" sm:hidden flex flex-row items-center py-5 px-3 justify-between">
            <a href="/">
              <h1 className="hover:text-blue-500 font-bold text-2xl">Logo</h1>
            </a>
            <button onClick={toggleNavbar} className="">
              {" "}
              {isOpen ? <X /> : <Menu />}
            </button>
          </nav>
          {isOpen && (
            <div className="block sm:hidden transition  ">
              <nav className="h-[10rem]  ">
                <ul className="flex flex-col items-center justify-center text-black gap-6">
                  <li className="decoration-[3px] underline-offset-4 hover:text-blue-500 font-semibold">
                    <a href="/">Nav</a>
                  </li>
                  <li className="decoration-[3px] underline-offset-4 hover:text-blue-500 font-semibold">
                    <a href="/">Bar</a>
                  </li>
                  <li className="decoration-[3px] underline-offset-4 hover:text-blue-500 font-semibold">
                    <a href="/">Items</a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>{" "}
      </Container>
    </header>
  );
};
