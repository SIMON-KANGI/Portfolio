
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import appTheme from "@/components/theme/Theme";
import Chakra from "@/components/chakra/chakra";
import Mouse from "@/components/theme/Mouse";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simon Mwangi",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
     <body className={inter.className}>
    <Chakra>
   
       <Navbar/>
       <main className="container mx-auto">
        {children}
       </main>
      <Footer/> 
       
  <Mouse/>
      </Chakra>
      </body>

     
    </html>
  );
}
