import { Box } from '@mui/material';

const Copyright = () => {
  return (
    <div>
      <p>
        Acesse o{' '}
        <a
          href="https://www.instagram.com/felipehilario.investimentos/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', textDecoration: 'underline', fontWeight: "bold" }}
        >
          Instagram
        </a>{' '}
        para saber mais informações.
      </p>
      <p>Direitos autorais © 2024 Felipe Hilário</p> <p>Todos os direitos reservados</p>
    </div>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        color: '#fff',
        width: '100%', 
        backgroundColor: '#333',
        padding: "20px",
        maxWidth: "100%" 
      }}
    >
      <Copyright />
    </Box>
  );
};

export default Footer;
