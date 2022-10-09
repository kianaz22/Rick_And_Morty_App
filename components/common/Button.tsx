import React, { ReactNode } from "react";
import { SxProps, Theme, Button as MUIButton } from "@mui/material";

const variants = {
  primary: {
    color: "white",
    backgroundColor: "primary.main",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
    "&:focus": {
      outline: "8px solid #CBE4E2",
    },
    "&:active": {
      backgroundColor: "neutrals.titleActive",
    },
    "&:disabled": {
      backgroundColor: "primary.tint",
    },
  },
  secondary: {
    border: "2px solid",
    borderColor: "primary.main",
    color: "primary.main",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "primary.dark",
      borderColor: "primary.dark",
    },
    "&:focus": {
      outline: "8px solid #F6F6F6",
    },
    "&:active": {
      color: "neutrals.titleActive",
      borderColor: "neutrals.titleActive",
    },
    "&:disabled": {
      color: "primary.tint",
      borderColor: "primary.tint",
    },
  },
  subtle: {
    border: "2px solid",
    borderColor: "primary.tint",
    color: "primary.main",
    backgroundColor: "white",
    "&:hover": {
      color: "primary.dark",
      backgroundColor: "white",
    },
    "&:focus": {
      outline: "8px solid #F6F6F6",
    },
    "&:active": {
      color: "neutrals.titleActive",
      borderColor: "primary.tint",
    },
    "&:disabled": {
      color: "primary.tint",
      borderColor: "primary.tint",
    },
  },
  text: {
    color: "primary.main",
    backgroundColor: "transparent",
    "&:hover": {
      color: "primary.dark",
      backgroundColor: "transparent",
    },
    "&:focus": {
      backgroundColor: "neutrals.inputBackground",
    },
    "&:active": {
      color: "neutrals.titleActive",
    },
    "&:disabled": {
      color: "primary.tint",
    },
  },
  pagination: {
    color: "neutrals.label",
    backgroundColor: "neutrals.white",
    border: "1px solid",
    borderColor: "transparent",
    "&:hover": {
      backgroundColor: "neutrals.white",
      borderColor: "neutrals.borders",
    },
    "&:focus": {
      outline: "8px solid #CBE4E2",
    },
    "&:active": {
      backgroundColor: "neutrals.white",
    },
    "&:disabled": {
      backgroundColor: "primary.tint",
    },
  },
};

const sizes = {
  small: {
    height: "40px",
    px: "20px",
    fontSize: "14px",
    fontWeight: 700,
    borderRadius: "12px",
  },
  medium: {
    height: "56px",
    px: "20px",
    fontSize: "16px",
    fontWeight: 800,
    borderRadius: "16px",
  },
  large: {
    height: "64px",
    px: "20px",
    fontSize: "16px",
    fontWeight: 800,
    borderRadius: "20px",
  },
};

interface IButton {
  variant: "text" | "primary" | "secondary" | "subtle" | "pagination";
  size: "small" | "medium" | "large";
  children?: ReactNode;
  sx?: SxProps<Theme>;
  [rest: string]: any;
}

export function Button({
  variant,
  size: buttonSize,
  children,
  sx,
  ...rest
}: IButton) {
  return (
    <MUIButton
      sx={{
        ...variants[variant],
        ...sizes[buttonSize],
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MUIButton>
  );
}
