import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { cards } from "../../db/exportTextsToSite";
import { handleWhatsAppRedirect } from "../../services/whatsAppService";
import image from "../../assets/image.png";

export default function SecondPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#170b2a",
        py: 1,
        backgroundImage: image
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: 2,
            width: "90%",
          }}
        >
          <Typography
            sx={{
              typography: { xs: "h3", md: "h2" },
              color: "#FFFFFF",
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            Transforme a sua vida financeira com uma metodologia que funciona!
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.1rem", md: "1rem" },
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            Realize seus sonhos financeiros com estratégias personalizadas e
            acompanhamento próximo em cada etapa do caminho.
          </Typography>

          <Box
            sx={{
              border: "1px solid #D4AF37",
              borderRadius: "8px",
              paddingY: "8px",
              mb: 4,
              mt: 2,
            }}
          >
            <Typography
              sx={{
                color: "#D3D3D3",
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontStyle: "oblique",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              Basta planejar, ajustar e realizar!
            </Typography>
          </Box>
          <Box
            component="img"
            src={image}
            alt="Descrição da imagem"
            sx={{
              height: { xs: "auto", md: 350 },
              maxWidth: "100%",
              mb: 3,
              mx: "auto",
              display: "block",
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#D4AF37",
              borderRadius: "15px",
              color: "#000",
              fontWeight: "600",
              transition: "transform 0.3s ease",
              transform: "scale(1)",
              width: "80%",
              mx: "auto",
              display: "block",
              fontSize: "12px",
              "&hover": {
                transform: "scale(1.05)",
                backgroundColor: "#D4AF37",
              },
              py: 1.5,
            }}
            onClick={() =>
              handleWhatsAppRedirect(
                "Olá! Gostaria de saber mais sobre seus serviços."
              )
            }
          >
            Agende um diagnóstico gratuito!
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            position: "relative",
            py: 3,
            "&::before": {
              content: '""',
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "100vw", // Ocupa toda a largura da tela
              height: "2px",
              background: `linear-gradient(to right, transparent, yellow, transparent)`,
              opacity: 0.7,
              transform: "translateX(-50%)", // Centraliza corretamente
            },
          }}
        >
          <Divider sx={{ visibility: "hidden" }} />
        </Box>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "18px", md: "20px" },
            fontWeight: "700",
            lineHeight: 1.1,
            mb: 2,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Por Que Escolher Meu Acompanhamento?
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ width: "100%", rowSpacing: { xs: 4, md: 3 }, py: 2 }}
        >
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={10} md={8} lg={6} xl={4}>
              <Box
                sx={{
                  backgroundColor: card.color,
                  borderRadius: "12px",
                  py: 3,
                  px: 2,
                  textAlign: "center",
                  width: "80%",
                  height: "180px",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 1,
                  transition: "transform 0.3s ease",
                  border: "2px solid #D4AF37",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 12px rgba(212,17555,.3)",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: card.textColor,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    mb: 0,
                  }}
                >
                  {card.emoji}
                  <br />
                  {card.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: card.textColor,
                    fontSize: { xs: "0.875rem", md: "0.9rem" },
                    lineHeight: 1.3,
                    px: 1,
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
