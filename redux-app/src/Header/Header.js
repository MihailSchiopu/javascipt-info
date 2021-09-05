import React from "react";
import style from "./header-style.module.css";

const { header, headerTitle, headerText } = style;

const Header = () => {
  return (
    <header className={header}>
      <p className={headerTitle}>Wellcome my unicorn farm!</p>
      <p className={headerText}>
        Here you have posibility to see all unicorns, or only one unicorn what
        is more special in your opinion. Also you can create new unicorns and
        update it if you have some idea or remove... Of corse for bad behavior.
      </p>
    </header>
  );
};

export default Header;
