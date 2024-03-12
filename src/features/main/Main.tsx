import { Box } from "@mui/material";
import FirstPage from "../home/FirstPage";
import FourtyPage from "../home/FourtyPage";
import SecondPage from "../home/SecondPage";
import ThirdPage from "../home/ThirdPage";
import { styles1 } from "../../styles/firstPageStyles";

export default function Main() {
  return (
    <>
      <Box sx={styles1.container}>
        <FirstPage />
      </Box>
      <SecondPage />
      <ThirdPage />
      <FourtyPage />
    </>
  );
}
