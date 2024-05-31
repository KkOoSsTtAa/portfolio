import { ReactNode } from "react";

import { META_DESCRIPTION, TITLE } from "@/data";

import "@/styles/globals.css";

export const dynamic = "force-static";

export const metadata = {
  title: TITLE,
  description: META_DESCRIPTION,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
