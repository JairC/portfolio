import "@/styles/globals.css";

export const metadata = {
  title: "Your Name — Product Designer",
  description: "Designer and consultant — turning ambiguous problems into interfaces people trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-frame">{children}</div>
      </body>
    </html>
  );
}
