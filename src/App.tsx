import Header from "../src/components/header/Header";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
