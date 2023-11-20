import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rober</h1>

        <ul className="footer__list">
          <li className="footer__link">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          {/* 2 */}
          <li className="footer__link">
            <a href="#portafolio" className="footer__link">
              Proyects
            </a>
          </li>

          {/* 3 */}
          <li className="footer__link">
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/roberto-zaracho/"
            className="footer__social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              />
            </svg>
          </a>

          <a
            href="https://github.com/Rober100"
            className="footer__social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="currentColor"
                d="M1024 25q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 165-50 318t-143 281t-221 224t-286 149q-3 1-9 1t-9 1q-24 0-38-14t-14-37v-140q0-69 1-141q0-51-15-103t-54-87q116-13 203-47t146-96t88-150t30-212q0-78-26-147t-79-128q11-28 16-58t5-60q0-39-8-77t-23-76q-5-2-11-2t-11 0q-32 0-67 10t-69 26t-67 35t-57 36q-125-35-256-35t-256 35q-25-17-57-36t-66-34t-70-26t-67-11h-11q-6 0-11 2q-14 37-22 75t-9 78q0 30 5 60t16 58q-53 58-79 127t-26 148q0 122 29 211t88 150t146 97t203 48q-29 26-44 62t-21 75q-27 13-57 20t-60 7q-64 0-106-30t-75-82q-12-19-29-38t-37-34t-43-24t-48-10h-12q-8 0-15 3t-14 6t-6 10q0 12 14 23t23 18l3 2q22 17 38 32t30 33t23 38t23 47q34 78 95 113t147 36q26 0 52-3t52-9v174q0 24-14 38t-39 14h-8q-5 0-9-2q-157-51-286-147t-221-225t-142-282t-51-318q0-141 36-272t104-244t160-207t207-161T752 62t272-37z"
              />
            </svg>
          </a>

          <a
            href="https://wa.me/5493794926291"
            className="footer__social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01Z"
              />
            </svg>
          </a>

          <a
            href="mailto:roberdz30@gmail.com"
            className="footer__social-link"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
              />
            </svg>
          </a>
        </div>

        <span className="footer__copy">
          {" "}
          &#169;RobertoZaracho. All rights reserverd
        </span>
      </div>
    </footer>
  );
};

export default Footer;
