import "./globals.css";

export const metadata = {
  title: "AnimeChar",
  description: "Anime Characters",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}