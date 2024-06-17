import GlobalThemeProvider from "./components/contexts/GlobalThemeProvider";
import "./globals.css";

export const metadata = {
  title: "후기부등본",
  description: "실거주자의 진짜 후기 | 주소로 실거주 후기를 확인하세요",
  keywords: "부동산, 후기, 후기부등본",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    site_name: "후기부등본",
    description: "실거주자의 진짜 후기 | 주소로 실거주 후기를 확인하세요",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <GlobalThemeProvider>{children}</GlobalThemeProvider>
        </body>
      </html>
    </>
  );
}
