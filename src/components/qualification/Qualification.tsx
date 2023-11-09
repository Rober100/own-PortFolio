import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Calificaciones</h2>
      <span className="section__subtitle">Mis Calificaciones</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educación
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiencia
          </div>
        </div>

        <div className="qualification__sections">

            {/* Aca están los Estudios */}
          <div className="qualification__content qualification__content-active">
            {/* Aca esta el primer titulo */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Desarrollador Full Stack
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Henry - Argentina
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - Presente
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Aca esta el primer titulo */}

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Otro título</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Otro Lugar - Francia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020 - 2023
                </div>
              </div>
            </div>

            {/* Aca vienen las experiencias */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Desarrollador Full Stack Experiencia
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Henry - Sudafrica
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - año pasado
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Aca están las experiencias */}
          <div className="qualification__content">

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Aca poner experiencias</h3>
                <span className="qualification__subtitle">
                  Aca poner el lugar donde fue
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Aca poner la fecha de
                  la experiencia
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Aca poner otra Experiencia</h3>
                <span className="qualification__subtitle">
                  Aca poner el lugar de la experiencia
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> fecha de la segunda experiencia
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
