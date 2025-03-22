import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/sidebar";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ali Coaching",
  description: "منصة علي للتدريب الشخصي والتغذية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <body className={arabic.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="">
            <Navbar />
          </div>
          <div className="flex mt-16">
            <Sidebar />
          </div>
          <main className="flex-1 lg:mr-[16vw] md:mr-[23vw]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
