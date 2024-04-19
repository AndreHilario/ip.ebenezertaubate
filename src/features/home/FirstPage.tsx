import { Box } from "@mui/material";
import { fisrtPageText, whatsAppMessage } from "../../db/exportTextsToSite";
import { styles1 } from "../../styles/firstPageStyles";
import image from "../../assets/image.png";
import { useState } from "react";
import ReactPixel from 'react-facebook-pixel';

export default function FirstPage() {
  const [isHovered, setIsHovered] = useState(false);
  ReactPixel.pageView();
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/5512982245338?text=${encodeURIComponent(whatsAppMessage)}`, '_blank');
  };

  return (
    <Box sx={styles1.container}>
      <Box sx={styles1.mainBox}>
        <Box sx={styles1.imageBox}>
          <img src={image} style={styles1.image} />
        </Box>
        <Box sx={styles1.title}>{fisrtPageText.title}</Box>
        <Box sx={styles1.textBox}>{fisrtPageText.text}</Box>
        <Box
          sx={{
            ...styles1.footer,
            "&:hover": styles1.buttonHover, 
          }}
        >
          <button
            style={{
              ...styles1.button,
              ...(isHovered && styles1.buttonHover), 
            }}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            onClick={openWhatsAppChat}
          >
            {fisrtPageText.footer}
          </button>
        </Box>
      </Box>
    </Box>
  );
}
