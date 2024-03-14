//import { useMediaQuery, useTheme } from "@mui/material";

// const theme = useTheme();
// const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
// const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

export const styles1 = {
  container: {
    width: "100%",
    height: "800px", // Alterado para ocupar toda a altura da tela
    display: "flex",
    flexDirection: "column", // Ajustado para colocar os elementos um em cima do outro
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #002147, #000)", // Gradiente de azul escuro para azul claro
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
    fontFamily: "Roboto, sans-serif"
  },
  mainBox: {
    display: "flex",
    flexDirection: "column", // Ajustado para colocar os elementos um em cima do outro
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    marginRight: "5px",
    width: "80%",
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
    textAlign: "center",
    textJustify: "inter-word"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  button: {
    backgroundColor: "#002147",
    color: "#fff", // Cor do texto do botão
    padding: "15px 20px", // Espaçamento interno do botão
    border: "none", // Remove a borda do botão
    borderRadius: "4px", // Borda arredondada do botão
    cursor: "pointer", // Altera o cursor ao passar o mouse sobre o botão
    transition: "transform 0.3s, box-shadow 0.3s", // Adiciona uma transição para suavizar a mudança de tamanho e sombra do botão
    boxShadow: "0px 0px 20px rgba(0, 0, 255, 0.5)",
    fontWeight: "bold"
  },
  // Estilo do botão quando o mouse está sobre ele
  buttonHover: {
    transform: "scale(1.1)", // Aumenta o tamanho do botão em 10%
    boxShadow: "0px 0px 20px rgba(0, 128, 0, 0.3)", // Adiciona uma sombra maior e verde quando o mouse está sobre o botão
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
    background: "linear-gradient(to bottom right, #002147, #000)",
    borderRadius: "10px", 
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)"
  },
};
