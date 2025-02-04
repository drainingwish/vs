import EmberBackground from "@/components/Stars";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono, Khula } from "next/font/google";
import Head from "next/head";

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const khula = Khula({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-khula",
  preload: true,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>momt - draining.info</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <EmberBackground />
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;