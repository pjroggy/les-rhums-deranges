import { Outlet } from "react-router-dom";
import "./scss/index.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { footerLinks, headerLinks } from "./services/links";

function App() {
  return (
    <>
      <Header links={headerLinks} />
      <Outlet />
      <Footer links={footerLinks} />
    </>
  );
}

export default App;
