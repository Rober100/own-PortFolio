interface Project {
    id: number;
    title: string;
    description: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Trendy Tech",
      description: "E-commerce de ventas de productos.",
    },
    {
      id: 2,
      title: "Henry Countries",
      description:
        "Henry Countries es una plataforma interactiva que te permite explorar el mundo y descubrir información detallada sobre países de una manera única y personalizada.",
    },
  ];
  
  export const projectsNav = [
    { name: "all" },
    { name: "web" },
    { name: "app" },
    { name: "design" },
  ];