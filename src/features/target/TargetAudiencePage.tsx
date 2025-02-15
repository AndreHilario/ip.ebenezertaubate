import { Box, Container, Typography, Grid, Button, Paper } from "@mui/material";
import {
  PieChartOutlined,
  BarChartOutlined,
  ShieldOutlined,
  TrendingUpOutlined,
  AttachMoneyOutlined,
  ErrorOutlineOutlined,
} from "@mui/icons-material";
import { handleWhatsAppRedirect } from "../../services/whatsAppService";

const TargetAudiencePage = () => {
  const benefits = [
    {
      id: 1,
      icon: <PieChartOutlined style={{ fontSize: 40, color: "#D4AF37" }} />,
      title: "Expandir e proteger o patrimônio",
      description: "De forma planejada e sustentável.",
    },
    {
      id: 2,
      icon: <BarChartOutlined style={{ fontSize: 40, color: "#D76A03" }} />,
      title: "Garantir uma renda passiva e segura",
      description: "Uma maneira tranquila de proteger o futuro.",
    },
    {
      id: 3,
      icon: <ShieldOutlined style={{ fontSize: 40, color: "#1C77F2" }} />,
      title: "Blindar e proteger o futuro financeiro",
      description: "Com inteligência para toda a família.",
    },
    {
      id: 4,
      icon: <TrendingUpOutlined style={{ fontSize: 40, color: "#BF37D4" }} />,
      title: "Aumentar a rentabilidade dos investimentos",
      description: "Utilizando estratégias certeiras.",
    },
    {
      id: 5,
      icon: <AttachMoneyOutlined style={{ fontSize: 40, color: "#07B26A" }} />,
      title: "Tomar melhores decisões financeiras",
      description: "Como compra de imóveis, veículos e outros.",
    },
    {
      id: 6,
      icon: <ErrorOutlineOutlined style={{ fontSize: 40, color: "#E63946" }} />,
      title: "Evitar erros custosos",
      description: "E desvalorizações por falta de planejamento.",
    },
  ];

  return (
    <Box
      sx={{
        background: "#170b2a",
        minHeight: "100vh",
        padding: "2rem",
        color: "#fff",
      }}
    >
      {/* Título Principal */}
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: "800",
            lineHeight: "1.2",
            textTransform: "uppercase",
            mb: "16px",
            letterSpacing: "1.2px",
          }}
        >
          Para Quem É?
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#fefefe",
            fontWeight: "500",
            lineHeight: "1.5",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
          }}
        >
          Para Quem Quer...
        </Typography>
      </Container>

      {/* Benefícios */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {benefits.map((benefit) => (
            <Grid key={benefit.id} item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#1a1a2e",
                  border: "5px solid #D4AF37",
                  backdropFilter: "blur(8px)",
                  padding: "20px",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "200px",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 12px rgba(212,17555,.3)",
                  },
                }}
              >
                {/* Ícone */}
                <Box
                  sx={{
                    mb: 2,
                  }}
                >
                  {benefit.icon}
                </Box>

                {/* Título */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#ffffff",
                  }}
                >
                  {benefit.title}
                </Typography>

                {/* Descrição */}
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#ddd",
                    mt: 1,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Final com o Botão */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D4AF37",
            borderRadius: "15px",
            color: "#000",
            fontWeight: "800",
            transition: "transform 0.3s ease",
            transform: "scale(1)",
            width: { xs: "80%", md: "40%" },
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
          onClick={() =>
            handleWhatsAppRedirect(
              "Quero agendar uma conversa sobre a sua assessoria financeira."
            )
          }
        >
          Pronto para começar? Clique aqui!
        </Button>
      </Box>
    </Box>
  );
};

export default TargetAudiencePage;
