import { Box } from "@mui/material";
import { fisrtPageText } from "../../db/exportTextsToSite";
import { styles1 } from "../../styles/firstPageStyles";
import image from "../../assets/image.png";
import { useState } from "react";

export default function FirstPage() {
  const [isHovered, setIsHovered] = useState(false);
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
            "&:hover": styles1.buttonHover, // Aplica os estilos de hover quando o mouse passa sobre o botão
          }}
        >
          <button
            style={{
              ...styles1.button,
              ...(isHovered && styles1.buttonHover), // Aplica os estilos de hover quando o mouse passa sobre o botão
            }}
            onMouseEnter={() => setIsHovered(true)} // Define o estado do hover como verdadeiro quando o mouse entra no botão
            onMouseLeave={() => setIsHovered(false)} // Define o estado do hover como falso quando o mouse sai do botão
          >
            {fisrtPageText.footer}
          </button>
        </Box>
      </Box>
    </Box>
  );
}
