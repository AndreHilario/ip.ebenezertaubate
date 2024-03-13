import { Box, Button } from "@mui/material";
import { fourtyPageText, whatsAppMessage } from "../../db/exportTextsToSite";
import '../../styles/fourtyPageStyles.css';

export default function FourtyPage() {
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/5512982245338?text=${encodeURIComponent(whatsAppMessage)}`, '_blank');
  };
  
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #002147, #000)",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <p style={{ color: "#fff", fontSize: "24px", textAlign: "center" }}>
        {fourtyPageText.text1}
      </p>
      <Button
        className="glow-on-hover"
        variant="contained"
        sx={{
          color: "#fff",
          padding: "15px 30px",
          borderRadius: "10px",
          fontSize: "18px",
          fontFamily: "Roboto, Arial, sans-serif",
          marginTop: "20px"
        }}
        onClick={openWhatsAppChat}
      >
        {fourtyPageText.text2}
      </Button>
    </Box>
  );
}