//import { useMediaQuery, useTheme } from "@mui/material";

// const theme = useTheme();
// const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
// const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

export const styles1 = {
    container: {
        width: "100%",
        height: "800px",
        backgroundColor: "#000",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
    },
  mainBox: {
    color: "orange"
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial, sans-serif", // Defina uma fonte de texto
    fontSize: "18px", // Tamanho da fonte
    textTransform: "uppercase", // Transforma o texto em maiúsculas
    letterSpacing: "2px", // Espaçamento entre letras
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo com transparência
    borderRadius: "8px", // Borda arredondada
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // Sombra ao redor do texto
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif", // Defina uma fonte de texto
    fontSize: "16px", // Tamanho da fonte
    color: "orange", // Cor do texto
    borderRadius: "8px", // Borda arredondada
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    textJustify: "inter-word"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  button: {
    backgroundColor: "green", // Cor de fundo verde do botão
    color: "#fff", // Cor do texto do botão
    padding: "10px 20px", // Espaçamento interno do botão
    border: "none", // Remove a borda do botão
    borderRadius: "4px", // Borda arredondada do botão
    cursor: "pointer", // Altera o cursor ao passar o mouse sobre o botão
    transition: "transform 0.3s, box-shadow 0.3s", // Adiciona uma transição para suavizar a mudança de tamanho e sombra do botão
    boxShadow: "0px 0px 10px rgba(0, 128, 0, 10)", // Sombra inicialmente invisível
  },
  // Estilo do botão quando o mouse está sobre ele
  buttonHover: {
    transform: "scale(1.1)", // Aumenta o tamanho do botão em 10%
    boxShadow: "0px 0px 20px rgba(0, 128, 0, 0.5)", // Adiciona uma sombra maior e verde quando o mouse está sobre o botão
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  image: {
    width: "50%",
    height: "auto",
    maxWidth: "100%",
    border: "4px solid orange",
    borderRadius: "10px", 
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)"
  },
};
