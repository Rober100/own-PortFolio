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
            <div className="qualification__content">
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title"></h3>
                        <span className="qualification__subtitle"> Henry - Argentina</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i> 2022 - Presente
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
