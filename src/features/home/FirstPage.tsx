import {
  Box,
  Button,
  Typography,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function FirstPage(): JSX.Element {
  const handleInstagramRedirect = () => {
    window.open("https://www.instagram.com/ip.ebenezertaubate", "_blank");
  };
  const handleFacebookRedirect = () => {
    window.open("https://www.facebook.com/ipebtaubate", "_blank");
  };
  const handleYouTubeRedirect = () => {
    window.open("https://www.youtube.com/@ip.ebenezertaubate", "_blank");
  };
  const handleMapsRedirect = () => {
    window.open(
      "https://www.google.com/maps?q=Igreja+Presbiteriana+Ebenézer+Taubaté",
      "_blank"
    );
  };
  const handleMusicDriveRedirect = () => {
    window.open(
      "https://drive.google.com/drive/folders/1IolVZa2EVXW0zzr_rQxPRBvmsKfWQLPu?usp=sharing",
      "_blank"
    );
  };

  return (
    <Box
      minHeight="100vh"
      bgcolor="#005B40"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      <Stack alignItems="center" spacing={2} mb={2}>
        <Avatar
          src="https://ugc.production.linktr.ee/9c02538a-83b5-4910-8431-e3af018967e1_Foto-de-Perfil---IPE--2-.png?io=true&size=avatar-v3_0"
          alt="Imagem de perfil"
          sx={{
            width: 110,
            height: 110,
            border: "4px solid #fff",
            mb: 1,
          }}
        />
        <Typography variant="h5" fontWeight="bold" color="#FFF">
          @ip.ebenezertaubate
        </Typography>
        <Typography
          variant="h6"
          color="#F0F0F0"
          fontWeight="bold"
          textAlign="center"
        >
          Igreja Presbiteriana Ebenézer Taubaté
        </Typography>
        <a
          href="https://open.spotify.com/show/57q9hWpcYGxiu1jboh3p4a?si=f9af7bc6f9654b77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ugc.production.linktr.ee/809a1d91-7834-478b-81dc-967845d54a40_Linktree---IPE.png?io=true&size=thumbnail-feature-v1_0"
            alt="Banner"
            style={{
              borderRadius: 24,
              width: "100%",
              maxWidth: 500,
              marginTop: 20,
              marginBottom: 12,
              border: "2px solid #FFF",
              objectFit: "cover",
            }}
          />
        </a>
      </Stack>

      <Stack
        spacing={3}
        alignItems="center"
        width="100%"
        maxWidth={500}
        mb={2}
        mt={2}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={handleMapsRedirect}
          sx={{
            position: "relative",
            background: "#fff",
            color: "#005B40",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: 16,
            height: 64,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            transition: "all 0.2s",
            justifyContent: "center",
            "&:hover": {
              background: "transparent",
              color: "#fff",
              "& svg": {
                color: "#fff", // muda a cor do ícone no hover
              },
            },
          }}
        >
          <PlaceIcon
            sx={{
              fontSize: 34,
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#005B40",
              transition: "color 0.2s",
            }}
          />
          Endereço
        </Button>

        <Button
          variant="contained"
          fullWidth
          onClick={handleMusicDriveRedirect}
          sx={{
            position: "relative",
            background: "#fff",
            color: "#005B40",
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: 16,
            height: 64,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            transition: "all 0.2s",
            justifyContent: "center",
            "&:hover": {
              background: "transparent",
              color: "#fff",
              "& svg": {
                color: "#fff",
              },
            },
          }}
        >
          <MusicNoteIcon
            sx={{
              fontSize: 30,
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#005B40",
              transition: "color 0.2s",
            }}
          />
          Músicas
        </Button>
      </Stack>

      <Stack direction="row" spacing={3} justifyContent="center" mt={4}>
        <IconButton
          aria-label="Instagram"
          onClick={handleInstagramRedirect}
          sx={{ color: "#fff" }}
        >
          <InstagramIcon sx={{ fontSize: 36 }} />
        </IconButton>
        <IconButton
          aria-label="Facebook"
          onClick={handleFacebookRedirect}
          sx={{ color: "#fff" }}
        >
          <FacebookIcon sx={{ fontSize: 36 }} />
        </IconButton>
        <IconButton
          aria-label="YouTube"
          onClick={handleYouTubeRedirect}
          sx={{ color: "#fff" }}
        >
          <YouTubeIcon sx={{ fontSize: 36 }} />
        </IconButton>
      </Stack>
    </Box>
  );
}
