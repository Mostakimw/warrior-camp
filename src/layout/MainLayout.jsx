import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Container from "../components/Container";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
