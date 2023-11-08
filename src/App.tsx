import Header from "../src/components/header/Header";
import Home from "./components/home/Home";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
