import type { Metadata } from "next";
import {Poppins, Instrument_Serif} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/providers/LoadingProvider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin']
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  title: 'Akshat Srivastava',
  description: 'Full-Stack Developer | Open Source Contributor | Web3 and Blockchain Security',
  openGraph: {
    url: 'https://akshat-srivastava.vercel.app/',
    siteName: 'Akshat Srivastava Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ" />
      </head>
      <body className={`${poppins.className} ${instrumentSerif.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>
            <div className="relative z-10">
              {children}
            </div>
            <ScrollToTop />
          </LoadingProvider>
        </ThemeProvider>
        <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="c9a48825-4062-464a-941d-c958ddf21a96"
          defer
        ></script>
      </body>
    </html>
  );
}
