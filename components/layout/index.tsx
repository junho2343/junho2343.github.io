import Footer from "components/layout/footer";
import Container from "components/layout/container";
import Meta from "components/meta";
import Header from "components/layout/header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />

      <Header />

      <div className="min-h-screen flex items-center flex-col relative">
        <Container>
          {/* <div className="min-h-screen"> */}
          {/* <Alert preview={preview} /> */}
          <main>{children}</main>
          {/* </div> */}
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
