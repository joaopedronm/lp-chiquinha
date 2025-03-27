import { Quicksand } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Components
import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

export const metadata = {
  title: "Chiquinha do Pixica - Vereadora de Itarema-CE",
  description: "Vereadora eleita e primeira secretária da Câmara Municipal de Itarema-CE, trabalho com dedicação para trazer melhorias e desenvolvimento para nossa cidade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${montserrat.variable}`}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
