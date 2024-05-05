import Container from "components/layout/container";

const Footer = () => {
  return (
    <div className="w-full h-20 mt-10 flex justify-center border-t border-t-[#d8e0e7] bg-[#f6f9fc] ">
      <Container className="flex items-center">
        <span className="text-[#8898a9] font-[300]">
          © Moon Junho. {new Date().getFullYear()}
        </span>
        <a href="https://github.com/junho2343" target="_blank">
          <img src="/assets/icon_github_logo.svg" alt="" className="pl-4" />
        </a>
      </Container>
    </div>
  );
};

export default Footer;
