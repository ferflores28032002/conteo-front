import { ThemeProvider } from "@/theme/theme-provider";
import type { Metadata } from "next";

import { CustomQueryClientProvider } from "@/providers/QueryClientProvider";

import { Footer, Navbar } from "@/components";

import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App products",
  description: "App products",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: Readonly<RootLayoutProps>): JSX.Element {
  const { children } = props;
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomQueryClientProvider>
            <main className="relative flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-grow flex-1">{children}</div>
              <Footer />
            </main>
          </CustomQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
