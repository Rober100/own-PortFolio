import Header from "../src/components/header/Header";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonial from "./components/testimonial/Testimonial";
import Contant from "./components/contact/Contant";

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
    </>
  );
}

export default App;
