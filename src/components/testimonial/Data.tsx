interface Testimonial {
  id: number;
  title: string;
  description: string;
}

const testimonial1: Testimonial = {
  id: 1,
  title: "Jhon Doe",
  description:
    "A really good job, all aspects of the project were followed step by step and with good results.",
};

const testimonial2: Testimonial = {
    id: 2,
    title: "Harry Clinton",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  }

const  testimonial3: Testimonial = {
    id: 3,
    title: "Sara Cill",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
}

export const Data = [testimonial1, testimonial2, testimonial3];
