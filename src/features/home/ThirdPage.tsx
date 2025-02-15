import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Container,
} from "@mui/material";
import { Close, CheckCircle, CancelRounded } from "@mui/icons-material";
import { handleWhatsAppRedirect } from "../../services/whatsAppService";

const ThirdPage = () => {
  const withoutList = [
    "Falta de estratégias claras para os seus investimentos.",
    "Decisões impulsivas que podem custar caro no futuro.",
    "Dificuldade para identificar as melhores soluções financeiras.",
    "Perda de tempo analisando inúmeras informações sem expertise.",
    "Decisões baseadas apenas em intuição, sem planejamento.",
    "Pouco acompanhamento em momentos críticos do mercado.",
  ];

  const withList = [
    "Investimentos alinhados aos seus objetivos de curto, médio e longo prazo",
    "Decisões estratégicas baseadas em dados e na sua realidade financeira.",
    "Acesso às melhores soluções disponíveis no mercado de forma simples e estruturada.",
    "Economia de tempo com orientação de um especialista dedicado.",
    "Planejamento completo e segurança na tomada de decisões financeiras.",
    "Suporte constante em todas as etapas, com ajustes conforme necessário.",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#FFFFFF",
        padding: 3,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            backgroundColor: "#170b2a",
            padding: 3,
            marginBottom: 4,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <CancelRounded sx={{ fontSize: 40, color: "#FF0000" }} />
          </Box>
          <Typography
            sx={{
              fontWeight: "600",
              mb: 1,
              textAlign: "start",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "25px",
              lineHeight: "2rem",
            }}
          >
            Sem a Nossa Assessoria de Investimentos:
          </Typography>
          <List>
            {withoutList.map((item, index) => (
              <ListItem key={index} sx={{ padding: 0.1 }}>
                <Close sx={{ color: "#FF0000" }} />
                <ListItemText primary={item} sx={{ color: "#FFFFFF", ml: 1 }} />
              </ListItem>
            ))}
          </List>
          <Typography variant="body1" sx={{ mt: 3, color: "#FFFFFF" }}>
            Quanto isso <span style={{ fontWeight: 800 }}>pode custar</span>{" "}
            para o <span style={{ fontWeight: 800 }}>crescimento</span> do seu
            patrimônio?
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: 3,
            color: "#000",
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <CheckCircle sx={{ fontSize: 40, color: "#008000" }} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              mb: 1,
              textAlign: "start",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "25px",
              lineHeight: "2rem",
            }}
          >
            Com a Nossa Assessoria Personalizada:
          </Typography>
          <List>
            {withList.map((item, index) => (
              <ListItem key={index} sx={{ padding: 0.1 }}>
                <CheckCircle sx={{ color: "#008000" }} />
                <ListItemText primary={item} sx={{ color: "#000", ml: 1 }} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D4AF37",
            borderRadius: "15px",
            color: "#000",
            fontWeight: "800",
            transition: "transform 0.3s ease",
            transform: "scale(1)",
            width: "80%",
            mx: "auto",
            display: "block",
            fontSize: "11px",
            mt: 4,
            "&hover": {
              transform: "scale(1.05)",
              backgroundColor: "#D4AF37",
            },
            py: 1.5,
          }}
          onClick={handleWhatsAppRedirect}
        >
          Fale comigo agora!
        </Button>
      </Container>
    </Box>
  );
};

export default ThirdPage;
