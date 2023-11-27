import { useEffect, useState } from "react";
import { projects, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      const newProjects = projects.filter((project) => {
        return project.category === selectedCategory;
      });

      setFilteredProjects(newProjects);
    }
  }, [selectedCategory]);

  //Nuevo para el carrusel
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImageIndex(
        (prevIndex) => (prevIndex + 1) % projects[activeIndex].image.length
      );
    }, 3500);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleClick = (e: React.MouseEvent, index: number) => {
    setSelectedCategory(e.currentTarget.textContent || "");
    setActiveImageIndex(index);
    setActiveImageIndex(0)
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((category, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                activeIndex === index ? "active-work" : "work__item"
              }`}
              key={index}
            >
              {category.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {filteredProjects.map((projects) => {
          return <WorkItems item={projects} key={projects.id} activeImageIndex={activeImageIndex}/>;
        })}
      </div>
    </div>
  );
};

export default Works;
