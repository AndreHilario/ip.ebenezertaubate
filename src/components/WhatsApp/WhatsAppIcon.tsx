import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { whatsAppMessage } from "../../db/exportTextsToSite";

const WhatsAppIconComponent = () => {
  const openWhatsAppChat = () => {
    window.open(
      `https://wa.me/5512982245338?text=${encodeURIComponent(whatsAppMessage)}`,
      "_blank"
    );
  };

  return (
    <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#4CAF50',
        padding: '10px',
        borderRadius: '50%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
        textAlign: 'center',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.3s ease-in-out', // Adiciona uma transição suave
    }}
        // Aumenta o ícone quando o mouse passa por cima
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
        // Volta ao tamanho original quando o mouse sai
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <WhatsAppIcon style={{ color: "white" }} onClick={openWhatsAppChat} />
    </div>
  );
};

export default WhatsAppIconComponent;
