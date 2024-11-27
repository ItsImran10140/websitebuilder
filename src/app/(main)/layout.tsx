import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default Layout;
