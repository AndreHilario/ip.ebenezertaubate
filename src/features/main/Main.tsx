import { Box } from "@mui/material";
import FirstPage from "../home/FirstPage";
import SecondPage from "../home/SecondPage";
import { styles1 } from "../../styles/firstPageStyles";
import WhatsAppIconComponent from "../../components/WhatsApp/WhatsAppIcon";

export default function Main() {
  return (
    <>
      <Box sx={styles1.container}>
        <FirstPage />
      </Box>
      <SecondPage />
      <WhatsAppIconComponent />
    </>
  );
}
