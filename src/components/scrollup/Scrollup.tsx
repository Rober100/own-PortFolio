import { useEffect } from "react";
import "./scrollup.css";

const Scrollup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollup = document.querySelector(".scrollup");
      if (scrollup) {
        if (window.scrollY >= 560) {
          scrollup.classList.add("show-scroll");
        } else {
          scrollup.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button className="scrollup" onClick={scrollToTop}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default Scrollup;
