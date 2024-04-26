"use client"

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import { Component } from "lucide-react"

// 2. Call `extendTheme` and pass your custom values
 export const theme = extendTheme({
  components:{
    
    Datepicker: {
      baseStyle: {
        bgColor: 'orange.500', // Change the background color to blue
        color: 'white', // Change the text color to white
        borderColor: 'blue.700', // Change the border color to a darker shade of blue
      },
    }
  },
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

