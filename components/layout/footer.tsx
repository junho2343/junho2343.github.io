import Container from "components/layout/container";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-20 mt-28 flex justify-center border-t border-t-[#d8e0e7] bg-[#f6f9fc] ">
      <Container className="flex items-center">
        <span className="text-[#8898a9] font-[300]">© Moon Junho. 2022</span>
        <img src="/assets/icon_github_logo.svg" alt="" />
        {/* <Image
          src=""
          alt="home"
          width={24}
          height={21}
        /> */}
      </Container>
    </div>
  );
};

export default Footer;
