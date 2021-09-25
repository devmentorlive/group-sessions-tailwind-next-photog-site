import { useState } from "react";
import MainMenu from "./main-menu";

export default function Header({}) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="top-0 md:relative ">
      <div className="hidden md:flex md:justify-center my-4">
        <MainMenu />
      </div>

      <div className="relative z-50">
        <div className="md:hidden w-full flex flex-row-reverse mt-4 pr-4">
          <div
            className={`tham tham-e-squeeze tham-w-6 ${
              showMobileMenu ? "tham-active" : ""
            }`}>
            <div
              className={`tham-box`}
              onClick={() => setShowMobileMenu((prev) => !prev)}>
              <div className="tham-inner bg-black" />
            </div>
          </div>
        </div>

        {showMobileMenu && (
          <div className="p-4 absolute bg-white w-full text-2xl z-50">
            <MainMenu />
          </div>
        )}
      </div>
    </header>
  );
}
