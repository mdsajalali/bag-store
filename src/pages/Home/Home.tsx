import Container from "../../components/Container";
import Banner from "../Banner";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 shadow-md py-1 z-[9999]">
        <Container>
          <Navbar />
        </Container>
      </div>
      <Container>
        <Banner />
      </Container>
      <div className="bg-[#121212] mt-14">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Home;
