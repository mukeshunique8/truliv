"use client"

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
 export const theme = extendTheme({
  colors: {
    p:{
      100:"#E95F29"
    },
    b: {
      100: "#1D273B",
      // ...
      900: "#1a202c",

    },
  },
  
})

