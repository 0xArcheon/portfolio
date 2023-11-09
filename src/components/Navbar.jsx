import React from "react";

function Navbar() {
  return (
    <div className="flex w-100 space justify-between p-10 bg-background font-strasua">
      <div className="text-text text-2xl">Amlan Saikia</div>
      <div className="text-text flex">
        <a>
          <ul className="ml-10">Blog</ul>
        </a>
        <a>
          <ul className="ml-10">Projects</ul>
        </a>
        <a>
          <ul className="ml-10">Contact</ul>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
