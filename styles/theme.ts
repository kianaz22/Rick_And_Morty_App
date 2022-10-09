import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#058079",
      dark: "#023633",
      light: "#9CBFBD", // @ts-ignore
      tint: "#CBE4E2",
    },
    error: { main: "#F22B2B" },
    success: { main: "#1FDDD2" },
    neutrals: {
      titleActive: "#000000",
      body: "#6D6D6D",
      label: "#2B2B2B",
      placeholder: "#999999",
      borders: "#B0B0B0",
      inputBackground: "#F6F6F6",
      background: "#E4E4E4",
      white: "#FFFFFF",
    },
  },
  spacing: 1, // @ts-ignore
  typography: {
    fontFamily: "Nunito Sans",
  },
});

const theme = createTheme(baseTheme, {
  typography: {
    displayLarge: {
      fontSize: 48,
      fontWeight: 400,
    },
    displayMedium: {
      fontSize: 32,
      fontWeight: 600,
    },
    displaySmall: {
      fontSize: 24,
      fontWeight: 600,
    },
    textLarge: {
      fontSize: 20,
      fontWeight: 600,
    },
    textMedium: {
      fontSize: 16,
      fontWeight: 600,
    },
    textSmall: {
      fontSize: 14,
      fontWeight: 600,
    },
    textXsmall: {
      fontSize: 12,
      fontWeight: 600,
    },
    textXxSmall: {
      fontSize: 11,
      fontWeight: 600,
    },

    displayLargeBold: {
      fontSize: 48,
      fontWeight: 700,
    },
    displayMediumBold: {
      fontSize: 32,
      fontWeight: 700,
    },
    displaySmallBold: {
      fontSize: 24,
      fontWeight: 700,
    },
    textLargeBold: {
      fontSize: 20,
      fontWeight: 700,
    },
    textMediumBold: {
      fontSize: 16,
      fontWeight: 700,
    },
    textSmallBold: {
      fontSize: 14,
      fontWeight: 700,
    },
    textXsmallBold: {
      fontSize: 12,
      fontWeight: 700,
    },
    textXxSmallBold: {
      fontSize: 11,
      fontWeight: 700,
    },
    textBody: {
      fontSize: 16,
      fontWeight: 600, // @ts-ignore
      color: baseTheme.palette.neutrals.body,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          textTransform: "none",
          whiteSpace: "nowrap",
          disableRipple: true,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
