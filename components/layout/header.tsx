import Container from "components/layout/container";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const resumeStatus = router?.pathname === "/resume" ? true : false;

  return (
    <div className="flex justify-center w-full border-b border-b-[#d8e0e7] pt-10 pb-2 sticky top-0 z-10 bg-white">
      <Container>
        {(resumeStatus
          ? [
              {
                name: "Resume",
                href: "/resume",
              },
              {
                name: "Github",
                href: "https://github.com/junho2343",
              },
            ]
          : [
              {
                name: "About",
                href: "/about",
              },
              {
                name: "Posts",
                href: "/",
              },
            ]
        ).map((one, index) =>
          one.href.startsWith("http") ? (
            <a
              href={one.href}
              target="_blank"
              className="pr-4 font-[400]"
              key={index}
            >
              {one.name}
            </a>
          ) : (
            <Link href={one.href} key={index}>
              <a className="pr-4 font-[400]">{one.name}</a>
            </Link>
          )
        )}
      </Container>
    </div>
  );
};

export default Header;
