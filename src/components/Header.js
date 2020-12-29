import React from "react";

function Header() {
  return (
    <header>
      <div>
        <h1> Denise's weather app </h1>
      </div>
      <nav>
        <a href="/?city=Seoul"> Seoul </a>
        <a href="/?city=London"> London </a>
        <a href="/?city=Jakarta"> Jakarta </a>
        <a href="/?city=Bangkok"> Bangkok </a>
      </nav>
    </header>
  );
}

export default Header;
