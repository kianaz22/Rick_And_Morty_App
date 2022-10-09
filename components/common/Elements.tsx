/* eslint-disable no-nested-ternary */
import React, { ReactNode } from "react";
import { Stack, SxProps, Theme } from "@mui/material";

interface IContainer {
  sx?: SxProps<Theme>;
  children?: ReactNode;
  [rest: string]: any;
}

function Container({ sx, children, ...rest }: IContainer) {
  return (
    <Stack
      sx={{
        borderRadius: "24px",
        p: 32,
        backgroundColor: "neutrals.white",
        boxShadow: "0px 16px 32px rgba(0, 36, 0, 0.04)",
        width: "100%",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

interface IRow {
  sx?: SxProps<Theme>;
  children?: ReactNode;
  [rest: string]: any;
}

function Row({ sx, children, ...rest }: IRow) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export { Container };
