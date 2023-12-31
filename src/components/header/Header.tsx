import { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, showToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Rober
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="nav__icon"
                >
                  <path
                    fill="currentColor"
                    d="M4.5 21q-.625 0-1.063-.438T3 19.5v-1.9l4-3.55V21H4.5ZM8 21v-4h8v4H8Zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.438 1.063T19.5 21H17ZM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525q.275 0 .537.088T13 3.9l2 1.775L3 16.25Z"
                  />
                </svg>{" "}
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="nav__icon"
                >
                  <path
                    fill="currentColor"
                    d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z"
                  />
                </svg>{" "}
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="nav__icon"
                >
                  <path
                    fill="currentColor"
                    d="M128 76a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm92-27.21v-1.58l14-17.51a12 12 0 0 0 2.23-10.59A111.75 111.75 0 0 0 225 71.89a12 12 0 0 0-9.11-5.89l-22.28-2.5l-1.11-1.11L190 40.1a12 12 0 0 0-5.89-9.1a111.67 111.67 0 0 0-27.23-11.27A12 12 0 0 0 146.3 22l-17.51 14h-1.58L109.7 22a12 12 0 0 0-10.59-2.23a111.75 111.75 0 0 0-27.22 11.28A12 12 0 0 0 66 40.11l-2.5 22.28l-1.11 1.11L40.1 66a12 12 0 0 0-9.1 5.89a111.67 111.67 0 0 0-11.23 27.23A12 12 0 0 0 22 109.7l14 17.51v1.58L22 146.3a12 12 0 0 0-2.23 10.59a111.75 111.75 0 0 0 11.29 27.22a12 12 0 0 0 9.05 5.89l22.28 2.48l1.11 1.11L66 215.9a12 12 0 0 0 5.89 9.1a111.67 111.67 0 0 0 27.23 11.27A12 12 0 0 0 109.7 234l17.51-14h1.58l17.51 14a12 12 0 0 0 10.59 2.23A111.75 111.75 0 0 0 184.11 225a12 12 0 0 0 5.91-9.06l2.48-22.28l1.11-1.11L215.9 190a12 12 0 0 0 9.06-5.91a111.67 111.67 0 0 0 11.27-27.23A12 12 0 0 0 234 146.3Zm-24.12-4.89a70.1 70.1 0 0 1 0 8.2a12 12 0 0 0 2.61 8.22l12.84 16.05a86.47 86.47 0 0 1-4.33 10.49l-20.43 2.27a12 12 0 0 0-7.65 4a69 69 0 0 1-5.8 5.8a12 12 0 0 0-4 7.65L166.86 207a86.47 86.47 0 0 1-10.49 4.35l-16.05-12.85a12 12 0 0 0-7.5-2.62h-.72a70.1 70.1 0 0 1-8.2 0a12.06 12.06 0 0 0-8.22 2.6l-16.05 12.85A86.47 86.47 0 0 1 89.14 207l-2.27-20.43a12 12 0 0 0-4-7.65a69 69 0 0 1-5.8-5.8a12 12 0 0 0-7.65-4L49 166.86a86.47 86.47 0 0 1-4.35-10.49l12.84-16.05a12 12 0 0 0 2.61-8.22a70.1 70.1 0 0 1 0-8.2a12 12 0 0 0-2.61-8.22L44.67 99.63A86.47 86.47 0 0 1 49 89.14l20.43-2.27a12 12 0 0 0 7.65-4a69 69 0 0 1 5.8-5.8a12 12 0 0 0 4-7.65L89.14 49a86.47 86.47 0 0 1 10.49-4.35l16.05 12.85a12.06 12.06 0 0 0 8.22 2.6a70.1 70.1 0 0 1 8.2 0a12 12 0 0 0 8.22-2.6l16.05-12.85A86.47 86.47 0 0 1 166.86 49l2.27 20.43a12 12 0 0 0 4 7.65a69 69 0 0 1 5.8 5.8a12 12 0 0 0 7.65 4L207 89.14a86.47 86.47 0 0 1 4.35 10.49l-12.84 16.05a12 12 0 0 0-2.63 8.22Z"
                  />
                </svg>{" "}
                Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" className="nav__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="nav__icon"
                >
                  <path
                    fill="currentColor"
                    d="M4 18q-.825 0-1.413-.588T2 16V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.588 1.413T20 18H4Zm0-2h16V5H4v11Zm-2 5q-.425 0-.713-.288T1 20q0-.425.288-.713T2 19h20q.425 0 .713.288T23 20q0 .425-.288.713T22 21H2Zm2-5V5v11Z"
                  />
                </svg>{" "}
                Services
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="nav__icon"
                >
                  <path
                    fill="currentColor"
                    d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2h4Z"
                  />
                </svg>{" "}
                Proyects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="nav__icon"
                >
                  <path
                    fill="currentColor"
                    d="M3 20v-6l8-2l-8-2V4l19 8l-19 8Z"
                  />
                </svg>{" "}
                Contact
              </a>
            </li>
          </ul>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="nav__close"
            onClick={() => showToggle(!toggle)}
          >
            <path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </div>
        <div className="nav__toggle" onClick={() => showToggle(!toggle)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M2.02 1.515a.505.505 0 0 0-.505.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505V2.02a.505.505 0 0 0-.505-.506H2.02Zm5.05 9.394a2.02 2.02 0 0 1 2.02 2.02v5.05A2.02 2.02 0 0 1 7.07 20H2.02A2.02 2.02 0 0 1 0 17.98v-5.05a2.02 2.02 0 0 1 2.02-2.02h5.05Zm10.91 0A2.02 2.02 0 0 1 20 12.93v5.05A2.02 2.02 0 0 1 17.98 20h-5.05a2.02 2.02 0 0 1-2.02-2.02v-5.05a2.02 2.02 0 0 1 2.02-2.02h5.05ZM7.07 12.424H2.02a.505.505 0 0 0-.505.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505v-5.05a.505.505 0 0 0-.505-.506Zm10.91 0h-5.05a.505.505 0 0 0-.506.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505v-5.05a.505.505 0 0 0-.505-.506ZM7.07 0a2.02 2.02 0 0 1 2.02 2.02v5.05a2.02 2.02 0 0 1-2.02 2.02H2.02A2.02 2.02 0 0 1 0 7.07V2.02A2.02 2.02 0 0 1 2.02 0h5.05Zm10.91 0A2.02 2.02 0 0 1 20 2.02v5.05a2.02 2.02 0 0 1-2.02 2.02h-5.05a2.02 2.02 0 0 1-2.02-2.02V2.02A2.02 2.02 0 0 1 12.93 0h5.05Zm0 1.515h-5.05a.505.505 0 0 0-.506.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505V2.02a.505.505 0 0 0-.505-.506Z"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
