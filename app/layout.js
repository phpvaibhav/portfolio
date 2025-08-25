import "./globals.css";

export const metadata = {
  title: "Vaibhav Sharma | Full Stack Developer",
  description: "Modern one-page portfolio — MERN/MEAN, 9+ years experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}