export const styles3 = {
  container: {
    width: "100%",
    height: "800px", // Alterado para ocupar toda a altura da tela
    display: "flex",
    flexDirection: "column", // Ajustado para colocar os elementos um em cima do outro
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #002147, #0055a5)", // Gradiente de azul escuro para azul claro
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 1)",
    fontFamily: "Roboto, Arial, sans-serif"
  },
  mainBox: {
    color: "orange",
    width: "90%", // Ajustado para ocupar toda a largura da tela
    maxWidth: "800px", // Limitado o máximo de largura para evitar que o texto fique muito largo
    margin: "10px auto", 
    marginTop: "50px"
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "24px", // Aumentado o tamanho da fonte para o título
    textTransform: "uppercase",
    letterSpacing: "2px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
    padding: "20px",
  },
  textBox: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "18px", // Aumentado o tamanho da fonte para o texto
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    padding: "20px",
    marginBottom: "20px", // Adicionado espaço abaixo de cada caixa de texto
    background: "rgba(255, 255, 255, 0.8)", // Fundo branco com transparência
    textAlign: "center",
    fontStyle: "italic"
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  button: {
    backgroundColor: "#2f80ed", // Azul claro
    color: "#fff",
    padding: "15px 30px", // Aumentado o espaçamento interno do botão
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    fontSize: "18px", // Aumentado o tamanho da fonte do botão
  },
  buttonHover: {
    transform: "scale(1.05)", // Ajustado o aumento de tamanho do botão ao passar o mouse
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
  },
};
