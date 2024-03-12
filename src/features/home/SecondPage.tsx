import { Box } from "@mui/material";
import { secondPageText } from "../../db/exportTextsToSite";
import { styles2 } from "../../styles/secondPageStyles";
import image from "../../assets/background.png";

export default function SecondPage() {
  return (
    <Box sx={styles2.container}>
      <Box sx={styles2.imageBox}>
        <img
          src={image}
          style={styles2.image}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
          }}
        />
      </Box>
      <Box sx={styles2.mainBox}>
        <Box sx={styles2.textBox}>
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #007FFF, cyan)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              textJustify: "inter-word"
            }}
          >
            {secondPageText.text1}
          </div>
        </Box>
        <Box sx={styles2.textBox}>
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #007FFF, cyan)",
              fontSize: "linear-gradient(to right, 95px, 10px)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
               textJustify: "inter-word"
            }}
          >
            {secondPageText.text2}
          </div>
        </Box>
        <Box sx={styles2.textBox}>
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #007FFF, cyan)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
               textJustify: "inter-word"
            }}
          >
            {secondPageText.text3}
          </div>
        </Box>
        <Box sx={styles2.textBox}>
          <div
            style={{
              backgroundImage: "linear-gradient(to right, #007FFF, cyan)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
               textJustify: "inter-word"
            }}
          >
            {secondPageText.text4}
          </div>
        </Box>
      </Box>
    </Box>
  );
}
