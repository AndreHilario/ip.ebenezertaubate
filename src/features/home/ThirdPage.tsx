import { Box, Button } from "@mui/material";
import { thirdPageText, whatsAppMessage } from "../../db/exportTextsToSite";
import { styles3 } from "../../styles/thirdPageStyles";

export default function ThirdPage() {
  const openWhatsAppChat = () => {
    window.open(
      `https://wa.me/5512982245338?text=${encodeURIComponent(whatsAppMessage)}`,
      "_blank"
    );
  };

  return (
    <Box sx={styles3.container}>
      <Box sx={styles3.mainBox}>
        <Box sx={styles3.title}>{thirdPageText.text1}</Box>
        <Box sx={styles3.textBox}>{thirdPageText.text2}</Box>
        <Box sx={styles3.textBox}>{thirdPageText.text3}</Box>
        <Box sx={styles3.textBox}>{thirdPageText.text4}</Box>
        <Box sx={styles3.textBox}>{thirdPageText.text5}</Box>
      </Box>
      <Box sx={styles3.footer}>
        <Button sx={styles3.button} onClick={openWhatsAppChat}>
          Saiba mais
        </Button>
      </Box>
    </Box>
  );
}
