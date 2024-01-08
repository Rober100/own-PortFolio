import { useState } from "react";

interface WorkItemsProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: Array<string>;
    link: string;
    repo: string;
  };
  activeImageIndex: number;
}

const WorkItems: React.FC<WorkItemsProps> = ({ item, activeImageIndex }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="work__card" key={item.id} onMouseEnter={() => setShowDescription(true)} onMouseLeave={()=> setShowDescription(false)}>
      <img
        src={item.image[activeImageIndex]}
        alt={item.title}
        className="work__img"
      />
      <h3 className="work__title">{item.title}</h3>
      {
        showDescription && <p className="work__description">{item.description}</p>
      }
      <div className="work__button-container">
        {item.link && (
          <a
            href={item.link}
            className="work__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
        )}
        <a
          href={item.repo}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio{" "}
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
