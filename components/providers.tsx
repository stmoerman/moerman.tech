"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import ActiveSectionContextProvider from "@/context/active-section-context";

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </NextThemesProvider>
  );
};

export default Providers;
