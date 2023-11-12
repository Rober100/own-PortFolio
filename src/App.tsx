import Header from "../src/components/header/Header";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonial/Testimonial";
import Contant from "./components/contact/Contant";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonial />
        <Contant />
      </main>
        <Footer />
        <Scrollup />
    </>
  );
}

export default App;
