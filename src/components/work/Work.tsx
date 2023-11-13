import Works from "./Works";
import "./work.css";
const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Proyectos</h2>
      <span className="section__subtitle">Proyectos más recientes</span>
      <Works />
    </section>
  );
};

export default Work;
