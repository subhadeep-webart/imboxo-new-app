import { Poppins } from "next/font/google";
import "./styles.css";
import "./globals.scss";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Imboxo",
  description: "Best Movie Streaming Platfrom"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
