import { Box, Container, Grid, Typography } from "@mui/material";
import "../../styles/fourtyPageStyles.css";
import { cardsFourtyPage } from "../../db/exportTextsToSite";

export default function FourtyPage() {
  return (
    <Box
      sx={{
        minHeight: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#170b2a",
        py: 4,
        px: 2
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            marginBottom: "2rem",
            textTransform: "uppercase",
            typography: { xs: "h4", md: "h3" },
          }}
        >
          Por que nossos clientes escolhem e recomendam o nosso atendimento?
        </Typography>

        <Grid
          container
          spacing={2.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          {cardsFourtyPage.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  backgroundColor: "#1a1a2e",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  border: "2px solid #D4AF37",
                  minHeight: "250px",
                  height: "100%",
                  boxSizing: "border-box",
                  "& .MuiTypography-root": {
                    width: "100%",
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 12px rgba(212,17555,.3)",
                  },
                }}
              >
                {/* Emojis */}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "2rem",
                    mb: "0.3rem",
                    color: "#FFD700",
                  }}
                >
                  {card.emoji}
                </Typography>

                {/* Título */}
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "1.125rem",
                    mb: "0.3rem",
                  }}
                >
                  {card.title}
                </Typography>

                {/* Conteúdo */}
                <Typography
                  sx={{
                    color: "#B0B0B0",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                  }}
                >
                  {card.content}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
