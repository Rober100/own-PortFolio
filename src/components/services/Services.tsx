import { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);

  const toggleTab = (index: number): void => {
    setToggle(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Servicios</h2>
      <span className="section__subtitle">Proyectos</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span
            className="services__button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            Ver más{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Aca está la descripción. :)
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desarrollador Web Full-stack con experiencia creando
                    aplicaciones web responsivas, progresivas (PWA), tiendas
                    online y SPAs utilizando React Js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desarrollador Web Full-stack con experiencia creando
                    aplicaciones web responsivas, progresivas (PWA), tiendas
                    online y SPAs utilizando React Js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desarrollador Web Full-stack con experiencia creando
                    aplicaciones web responsivas, progresivas (PWA), tiendas
                    online y SPAs utilizando React Js.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span
            onClick={() => {
              toggleTab(2);
            }}
            className="services__button"
          >
            Ver más{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Aca está la descripción. :)
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desarrollador Web Full-stack con experiencia creando
                    aplicaciones web responsivas, progresivas (PWA), tiendas
                    online y SPAs utilizando React Js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desarrollador Web Full-stack con experiencia creando
                    aplicaciones web responsivas, progresivas (PWA), tiendas
                    online y SPAs utilizando React Js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desarrollador Web Full-stack con experiencia creando
                    aplicaciones web responsivas, progresivas (PWA), tiendas
                    online y SPAs utilizando React Js.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
