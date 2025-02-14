import { Box, Button, Container, Grid, Typography } from "@mui/material";
import feedbackImg1 from "../../assets/feedback1.jpeg";
import feedbackImg2 from "../../assets/feedback2.jpeg";
import feedbackImg3 from "../../assets/feedback3.jpeg";
import feedbackImg4 from "../../assets/feedback4.jpeg";
import feedbackImg5 from "../../assets/feedback5.jpeg";
import feedbackImg6 from "../../assets/feedback6.jpeg";
import { handleWhatsAppRedirect } from "../../services/whatsAppService";

const FeedbackPage = () => {
  const feedbackImages = [
    { id: 1, src: feedbackImg1 },
    { id: 2, src: feedbackImg2 },
    { id: 3, src: feedbackImg3 },
    { id: 4, src: feedbackImg4 },
    { id: 5, src: feedbackImg5 },
    { id: 6, src: feedbackImg6 },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#FFFFFF",
        paddingY: "2rem",
      }}
    >
      {/* Cabeçalho */}
      <Container maxWidth="xl" sx={{ textAlign: "center", mb: "40px" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#170b2a",
            fontSize: { xs: "28px", md: "38px" },
            fontWeight: "800",
            lineHeight: "1.3",
            textTransform: "uppercase",
            mb: "10px",
          }}
        >
          Falar é Fácil,
          <Box component="span" sx={{ color: "#D4AF37", display: "block" }}>
            Provar é Ainda Mais!
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "16px", md: "18px" },
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Veja o que nossos clientes estão dizendo:
        </Typography>
      </Container>

      <Container maxWidth="xl">
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Grid container spacing={8} alignItems="center">
            {feedbackImages.map((image, index) => (
              <Grid
                key={image.id}
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
                  transition: "padding 0.3s ease",
                  paddingRight: index % 2 === 0 ? "20px" : 0,
                  paddingLeft: index % 2 !== 0 ? "20px" : 0,
                }}
              >
                <Box
                  sx={{
                    width: "80%",
                    maxWidth: "500px",
                    position: "relative",
                    marginBottom:
                      index < feedbackImages.length - 1 ? "80px" : "40px",
                    transform: `rotate(${index % 2 === 0 ? "-" : ""}3deg)`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, .15)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    "&:hover": {
                      transform: `rotate(0deg) scale(1.03)`,
                      boxShadow: "0 12px 32px rgba(0, 0, 0, .2)",
                    },
                  }}
                >
                  <img
                    src={image.src}
                    alt={`Feedback ${image.id}`}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: { md: "none" }, paddingX: "20px" }}>
          {feedbackImages.map((image, index) => (
            <Grid
              key={image.id}
              item
              xs={12}
              sx={{
                marginBottom: index < feedbackImages.length - 1 ? "40px" : 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  transform: `rotate(${index % 2 === 0 ? "-" : ""}2deg)`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, .15)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  "&:hover": {
                    transform: `rotate(0deg) scale(1.03)`,
                    boxShadow: "0 12px 32px rgba(0, 0, 0, .2)",
                  },
                }}
              >
                <img
                  src={image.src}
                  alt={`Testimony ${image.id}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Box>
        <Button
        variant="contained"
          sx={{
            backgroundColor: "#170b2a",
            borderRadius: "15px",
            color: "#fff",
            fontWeight: "bold",
            transition: "transform 0.3s ease",
            transform: "scale(1)",
            width: "80%",
            mx: "auto",
            display: "block",
            fontSize: "11px",
            "&hover": {
              transform: "scale(1.05)",
              backgroundColor: "#000000",
            },
            py: 1.5,
            mt: 3,
          }}
          onClick={handleWhatsAppRedirect}
        >
          Vamos Conversar!
        </Button>
      </Container>
    </Box>
  );
};

export default FeedbackPage;
