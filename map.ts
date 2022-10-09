import { Button, Typography, Palette } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    desktop: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    titleActive: string;
    body: string;
    label: string;
    placeholder: string;
    line: string;
    inputBackground: string;
    backgroundColor: string;
    borders: string;
    white: string;
  }
  interface PaletteOptions {
    titleActive: string;
    body: string;
    label: string;
    placeholder: string;
    line: string;
    inputBackground: string;
    backgroundColor: string;
    borders: string;
    white: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;
    textLarge: React.CSSProperties;
    textMedium: React.CSSProperties;
    textSmall: React.CSSProperties;
    textXsmall: React.CSSProperties;
    textXxsmall: React.CSSProperties;
    displayLargeBold: React.CSSProperties;
    displayMediumBold: React.CSSProperties;
    displaySmallBold: React.CSSProperties;
    textLargeBold: React.CSSProperties;
    textMediumBold: React.CSSProperties;
    textSmallBold: React.CSSProperties;
    textXsmallBold: React.CSSProperties;
    textXxsmallBold: React.CSSProperties;
    textBody: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    textLarge?: React.CSSProperties;
    textMedium?: React.CSSProperties;
    textSmall?: React.CSSProperties;
    textXsmall?: React.CSSProperties;
    textXxsmall?: React.CSSProperties;
    displayLargeBold?: React.CSSProperties;
    displayMediumBold?: React.CSSProperties;
    displaySmallBold?: React.CSSProperties;
    textLargeBold?: React.CSSProperties;
    textMediumBold?: React.CSSProperties;
    textSmallBold?: React.CSSProperties;
    textXsmallBold?: React.CSSProperties;
    textXxsmallBold?: React.CSSProperties;
    textBody: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    textLarge: true;
    textMedium: true;
    textSmall: true;
    textXsmall: true;
    textXxsmall: true;
    displayLargeBold: true;
    displayMediumBold: true;
    displaySmallBold: true;
    textLargeBold: true;
    textMediumBold: true;
    textSmallBold: true;
    textXsmallBold: true;
    textXxsmallBold: true;
    textBody: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    subtle: true;
    text: true;
  }
}
