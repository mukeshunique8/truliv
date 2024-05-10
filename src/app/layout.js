'use client'


import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import {theme} from '../chakraTheme'
import { HouseProvider } from "../providers/HouseContext";
import { FilterProvider } from "../providers/FilterContext";


const poppins = Poppins(
  { subsets: ["latin"],
  weight: [ '100','300','400','700','900'],
variable:'--font-roboto' },
  
);

import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "Truliv",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <HouseProvider> 
        <FilterProvider>
      <ChakraProvider theme={theme}>
        {children}
        </ChakraProvider>
        </FilterProvider>
      </HouseProvider>
      {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
