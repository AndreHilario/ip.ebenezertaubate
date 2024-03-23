import { Box } from "@mui/material";
import FirstPage from "../home/FirstPage";
import SecondPage from "../home/SecondPage";
import { styles1 } from "../../styles/firstPageStyles";
import WhatsAppIconComponent from "../../components/WhatsApp/WhatsAppIcon";
import ThirdPage from "../home/ThirdPage";
import FourtyPage from "../home/FourtyPage";
import Footer from "../../components/Footer/Copyright";
import Header from "../../components/Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Box sx={styles1.container}>
        <FirstPage />
      </Box>
      <SecondPage />
      <ThirdPage />
      <FourtyPage />
      <Footer />
      <WhatsAppIconComponent />
    </>
  );
}
