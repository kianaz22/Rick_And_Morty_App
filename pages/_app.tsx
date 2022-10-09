import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { BaseLayout } from "../components/common/BaseLayout";
import { getCookie } from "cookies-next";
import { NextPageContext } from "next";
interface Props extends AppProps {
  initialFaveChar: string;
}
function MyApp({ Component, pageProps, initialFaveChar }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout faveChar={initialFaveChar}>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = ({ ctx }: { ctx: NextPageContext }) => ({
  initialFaveChar: getCookie("fave_char", ctx) || "n",
});

export default MyApp;
