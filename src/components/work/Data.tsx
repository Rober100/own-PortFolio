//* Image about Trendy Spot //
import image1 from "../../assets/trendy-Spot/img1.png";
import image2 from "../../assets/trendy-Spot/img2.png";
import image3 from "../../assets/trendy-Spot/img3.png";

// //* Image about Trendy Tech //
// import img1 from "../../assets/trendy-Tech/Cap1.png";
// import img2 from "../../assets/trendy-Tech/Cap2.png";
// import img3 from "../../assets/trendy-Tech/Cap3.png";


interface Project {
  id: number;
  title: string;
  description: string;
  image: Array<string>;
  category: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Trendy Tech",
    description:
      "Henry Countries es una plataforma interactiva que te permite explorar el mundo y descubrir información detallada sobre países de una manera única y personalizada.",
    image: [image1, image2, image3],
    category: "Web",
    link: "https://trendy-tech.onrender.com/",
  },
  // {
  //   id: 2,
  //   title: "Trendy Spot",
  //   description: "E-commerce de ventas de productos.",
  //   image: [img1, img2, img3],
  //   category: "App",
  //   link: "https://front-trendy-app.vercel.app/",
  // },

  // {
  //   id: 3,
  //   title: "Juego Ta-Te-Tí",
  //   description: "Ta-te-tí",
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
