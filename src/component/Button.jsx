import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, href, onclick, px, white, children }) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transitions-colors ${
    className || ""
  } ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"}`;
  const spanClasses = "relative z-10";
  const RenderButton = () => (
    <button className={classes} onclick={onclick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const RenderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? <RenderLink /> : <RenderButton />;
};

export default Button;
