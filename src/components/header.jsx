import React from "react";
import "./header.css";

const Header = () => (
  <div>
    <header>
      <div
        className="logo"
        style={{
          backgroundImage: `url(/logo.png)`,
          backgroundSize: `${80}px ${40}px`
        }}
      />
    </header>
  </div>
);

export default Header;
