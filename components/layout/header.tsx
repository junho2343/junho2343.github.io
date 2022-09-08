import Container from "components/layout/container";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center w-full border-b border-b-[#d8e0e7] pt-10 pb-2 sticky top-0 z-10 bg-white">
      <Container>
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
      </Container>
    </div>
  );
};

export default Header;
