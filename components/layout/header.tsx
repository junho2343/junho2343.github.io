import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full border-b border-b-[#d8e0e7] pt-10 pb-2 sticky top-0 bg-white">
      {[
        {
          name: "About",
          href: "/about",
        },
        {
          name: "Posts",
          href: "/",
        },
      ].map((one) => (
        <Link href={one.href}>
          <a className="pr-4 font-[400]">{one.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Header;
