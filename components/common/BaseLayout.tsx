import { Box } from "@mui/material";
import { Header } from "./Header";

type Props = { children: JSX.Element; faveChar: string };

function BaseLayout({ children, faveChar }: Props) {
  return (
    <>
      <Box sx={{ p: 32, height: "100vh" }}>
        <Box sx={{ mx: "auto", maxWidth: 900, height: "100%" }}>
          <Header faveChar={faveChar} />
          {children}
        </Box>
      </Box>
    </>
  );
}

export { BaseLayout };
