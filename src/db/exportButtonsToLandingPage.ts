import profileImage from "../assets/profileImage.jpeg";
import linkedIn from "../assets/linkedin.png";
import services from "../assets/services.jpeg"
import { handleWhatsAppRedirect } from "../services/whatsAppService";

export const buttonData = [
  {
    text: "Diagnóstico Financeiro Gratuito!",
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
    avatar: services,
  },
  {
    text: "Linkedin",
    onClick: () =>
      window.open(
        "https://www.linkedin.com/in/felipe-hilário-cea-549b2b182/",
        "_blank"
      ),
    avatar: linkedIn,
  },
];
