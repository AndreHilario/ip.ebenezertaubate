import { createTheme } from "@mui/material";

export const muiComponents = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#7b7b7b #BDBDBD",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: 10,
            backgroundColor: "#F2F4F7",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#7b7b7b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#23c12e",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#23c12e",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#2b2b2b",
          },
          "&::-webkit-scrollbar-button, & *::-webkit-scrollbar-button": {
            backgroundColor: "#d6d6d6",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          minHeight: "48px",
          marginBottom: "15px",
        },
        indicator: {
          height: "3px",
        },
        flexContainer: {
          justifyContent: "center",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 700, // Mesmo peso do <strong>
          padding: "12px 16px",
          borderRadius: "8px",
          "&.Mui-selected": {
            color: "#000", // Cor do item selecionado
          },
        },
      },
      defaultProps: {
        disableRipple: true, // Remove efeito de ripple ao clicar
      },
    },
    MuiSelect: {
      defaultProps: {
        sx: {
          borderRadius: "10px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 0,
          backgroundColor: "transparent",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          "& div": {
            borderRadius: "10px",
            fontSize: "16px",
            padding: "4px",
          },
          "& input": {
            padding: "4px",
          },
          "& label": {
            top: "-8px",
            fontSize: "16px",
          },
          "& label.Mui-focused": {
            transform: "translate(14px, 0px) scale(0.75)",
          },
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#D4AF37",
          borderRadius: "15px",
          fontSize: "11px",
          letterSpacing: "0.01px",
          fontWeight: "bold",
          transition:
            "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
          "&hover": {
            transform: "scale(1.05)",
            backgroundColor: "#D4AF37",
          },
          whiteSpace: "nowrap",
          textTransform: "none",
        },
      },
    },
    MuiTableCell: {
      defaultProps: {
        sx: {
          borderRadius: 0,
          borderBottom: `1px solid '#f0f0f0'`,
        },
      },
    },
    MuiTableHead: {
      defaultProps: {
        sx: {
          borderRadius: 0,
          backgroundColor: "#193B6E",
          color: "#fafafa",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          zIndex: 1300,
        },
        paper: {
          borderRadius: "12px",
          color: "#000",
          boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.1)",
          padding: "6px",
          backgroundColor: "#fff",
          overflow: "hidden",
          border: "2px solid #34D399",
        },
        paperWidthSm: {
          maxWidth: "600px",
        },
        paperFullWidth: {
          padding: "24px",
        },
      },
    },
  },
});
