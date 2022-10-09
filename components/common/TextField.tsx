import React from "react";
import { TextField as MuiTextField, SxProps, Theme } from "@mui/material";

interface ITextfield {
  sx?: SxProps<Theme>;
  [rest: string]: any;
}

const sxStyles = {
  input: {
    height: 54,
    width: 224,
    fontSize: 16,
    fontWeight: 600,
    color: "neutrals.label",
    border: "1px solid",
    borderColor: "transparent",
    borderRadius: "12px",
    backgroundColor: "white",
    px: "24px",
    py: "16px",
    "&:hover": {
      borderColor: "neutrals.borders",
    },
    "&.Mui-focused": {
      backgroundColor: "#FCFCFC",
      borderColor: "primary.main",
    },
  },
};

function TextField({ sx, ...rest }: ITextfield) {
  return (
    <MuiTextField
      variant="standard"
      {...rest}
      InputProps={{
        disableUnderline: true,
        sx: { ...sxStyles.input, ...sx },
      }}
    />
  );
}

export { TextField };
