import profileImage from "../assets/profileImage.jpeg";
import home from "../assets/home.png";
import backgroundImage from "../assets/background.png";

export const buttonData = [
  {
    text: "Diagnóstico Personalizado - Agende agora!",
    onClick: () =>
      window.open(
        "https://wa.me/5512982245338?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito!",
        "_blank"
      ),
    avatar: profileImage,
  },
  {
    text: "Conheça nossos serviços!",
    onClick: () => {
      window.location.href = "/serviços";
    },
    avatar: home,
  },
  {
    text: "Linkedin",
    onClick: () =>
      window.open(
        "https://www.linkedin.com/in/felipe-hilário-cea-549b2b182/",
        "_blank"
      ),
    avatar: backgroundImage,
  },
];
