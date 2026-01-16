import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mj's portfolio",
  description: "Minji's portfolio website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
