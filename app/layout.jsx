import "@/styles/globals.css";
import { Navbar } from "@/components/navigation/Navbar.jsx";
import { Footer } from "@/components/navigation/Footer.jsx";

export const metadata = {
  title: "Your Name — Product Designer",
  description: "Designer and consultant — turning ambiguous problems into interfaces people trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="site-frame">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
