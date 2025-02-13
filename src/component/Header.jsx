import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import { HamburgerMenu } from "../component/design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useState } from "react";
const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(true);
  const ToggleOpenNavigation = () => {
    const navigation = !openNavigation;
    setOpenNavigation(navigation);
    console.log(openNavigation);
  };
  const handleClick = () => {
    setOpenNavigation(false);
  };
  useEffect(() => {
    if (openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [openNavigation]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50   border-b border-n-6  lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 ax-lg:py-4">
          <a className="block w-[12rem] lg:mr-8" href="#hero">
            <img src={brainwave} width={190} height={40} alt="Brainwave" />
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] right-0 left-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  className={`block relative font-code text-2xl uppercase transition-colors text-n-1 hover:text-color-1 ${
                    item.onlyMobile ? "hidden" : " "
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    location.hash === item.url
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  onClick={handleClick}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>
          <a
            href="#signup"
            className="hidden button mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New Account
          </a>
          <Button className={"hidden lg:flex"} href="#login">
            Sign In
          </Button>
          <Button
            className={`ml-auto lg:hidden`}
            px="px-3"
            onClick={ToggleOpenNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
