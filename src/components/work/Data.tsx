//* Image about Trendy Spot //
import image1 from "../../assets/trendy-Spot/img001.png";
import image2 from "../../assets/trendy-Spot/img2.png";
import image3 from "../../assets/trendy-Spot/img3.png";

// //* Image about Trendy Tech //
import img1 from "../../assets/trendy-Tech/Cap1.png";
import img2 from "../../assets/trendy-Tech/Cap2.png";
import img3 from "../../assets/trendy-Tech/Cap3.png";


interface Project {
  id: number;
  title: string;
  description: string;
  image: Array<string>;
  category: string;
  link: string;
  repo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Trendy Spot",
    description:
      "Henry Countries es una plataforma interactiva que te permite explorar el mundo y descubrir información detallada sobre países de una manera única y personalizada.",
    image: [ image1,image2, image3],
    category: "Web",
    link: "https://front-trendy-app.vercel.app/",
    repo: "https://github.com/NitsugaSamot/back-trendy-app"
  },
  {
    id: 2,
    title: "Trendy Tech",
    description: "E-commerce de ventas de productos.",
    image: [img1, img2, img3],
    category: "App",
    link: "https://trendy-tech.onrender.com/",
    repo: "https://github.com/Rey5440/TrendyTech-Back"
  },

  // {
  //   id: 3,
  //   title: "Henry Countries",
  //   description: "Una single page aplication que simula una pagina de turismo",
  //   image: [image4],
  //   category: "Design",
  //   link: "https://front-trendy-app.vercel.app/",
  // },
];

export const projectsNav = [
  { name: "All" },
  { name: "Web" },
  { name: "App" },
  { name: "Design" },
];
