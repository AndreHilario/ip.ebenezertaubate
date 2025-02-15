import profileImage from "../assets/profileImage.jpeg";
import home from "../assets/home.png";
import backgroundImage from "../assets/background.png";
import { handleWhatsAppRedirect } from "../services/whatsAppService";

export const buttonData = [
  {
    text: "Diagnóstico Financeiro Gratuito - Agende agora!",
    onClick: () =>
      handleWhatsAppRedirect(
        "Quero agendar um diagnóstico financeiro personalizado."
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
