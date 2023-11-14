import image1 from "../../assets/work1.jpg";
import image2 from "../../assets/work2.jpg";
import image3 from "../../assets/work3.jpg";
import image4 from "../../assets/work4.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Trendy Tech",
    description: "E-commerce de ventas de productos.",
    image: image1,
    category: "App",
  },
  {
    id: 2,
    title: "Henry Countries",
    description:
      "Henry Countries es una plataforma interactiva que te permite explorar el mundo y descubrir información detallada sobre países de una manera única y personalizada.",
    image: image2,
    category: "Web",
  },
  {
    id: 3,
    title: "Trendy Spot",
    description: "E-commerce de venta de ropa deportiva.",
    image: image3,
    category: "App",
  },
  {
    id: 4,
    title: "Juego",
    description: "Ta-te-tí",
    image: image4,
    category: "Design",
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "Web" },
  { name: "App" },
  { name: "Design" },
];
