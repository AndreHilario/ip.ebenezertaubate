import {
  Box,
  Button,
  Typography,
  Avatar,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import profileImage from "../../assets/image.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { buttonData } from "../../db/exportButtonsToLandingPage";

export default function FistPage() {
  const handleWhatsAppRedirect = () => {
    window.open(
      "https://wa.me/5512982245338?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito!",
      "_blank"
    );
  };
  const handleInstagramRedirect = () => {
    window.open(
      "https://www.instagram.com/felipehilario.investimentos",
      "_blank"
    );
  };
  const handleEmailRedirect = () => {
    window.location.href = "mailto:seu_email@dominio.com";
  };
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      p={1}
    >
      {/* Imagem e cabeçalho */}
      <Avatar
        src={profileImage}
        alt="Imagem de perfil"
        sx={{ width: 110, height: 110, marginBottom: 3 }}
      />
      <Typography variant="h6" fontWeight="bold" color={"#D4AF37"}>
        @felipehilario.investimentos
      </Typography>
      <Typography
        variant="subtitle2"
        textAlign="center"
        sx={{ mt: 2, mb: 3 }}
        color={"#fff"}
      >
        Seja bem vindo ao mundo de quem quer transformar objetivos financeiros
        em conquistas reais.
      </Typography>

      {/* Redes sociais */}
      <Box sx={{ display: "flex", marginBottom: 5 }}>
        <IconButton onClick={handleInstagramRedirect}>
          <InstagramIcon
            sx={{ color: "#D4AF37", cursor: "pointer", fontSize: 30 }}
          />
        </IconButton>
        <IconButton onClick={handleEmailRedirect}>
          <EmailIcon
            sx={{ color: "#D4AF37", cursor: "pointer", fontSize: 30 }}
          />
        </IconButton>
        <IconButton onClick={handleWhatsAppRedirect}>
          <WhatsApp
            sx={{ color: "#D4AF37", cursor: "pointer", fontSize: 30 }}
          />
        </IconButton>
      </Box>

      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={3}
        sx={{ width: "100%", maxWidth: 600 }}
      >
        {buttonData.map((button, index) => (
          <Grid item key={index} sx={{ width: "100%", position: "relative" }}>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #fff",
                color: "white",
                backgroundColor: "transparent",
                width: "100%",
                height: 70,
                borderRadius: 30,
                textTransform: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                paddingLeft: 2,
                paddingRight: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#0000ff",
                },
              }}
              onClick={button.onClick}
            >
              <Avatar
                src={button.avatar}
                alt="Ícone botão"
                sx={{
                  width: 55,
                  height: 55,
                  position: "absolute",
                  left: 7,
                }}
              />
              <span
                style={{
                  flexGrow: 1,
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  paddingLeft: "80px",
                  paddingRight: "20px",
                }}
              >
                {button.text}
              </span>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
