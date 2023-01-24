import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans, Roboto, Poppins } from "@next/font/google";


const poppins = Poppins({
  weight: ["300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});
const openSans = Open_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
  style: ["normal"],
});
export default function App({ Component, pageProps }: AppProps) {
  <style jsx global>{`
  :root {
    --openSans-font: ${openSans.style.fontFamily};
    --poppins-font: ${poppins.style.fontFamily};
  }
`}</style>
  return <Component {...pageProps} />;
}
