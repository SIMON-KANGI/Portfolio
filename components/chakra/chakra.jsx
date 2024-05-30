'use client'
import { ChakraProvider } from "@chakra-ui/react"
import appTheme from "../theme/Theme"
function Chakra({children}){
    return <ChakraProvider theme={appTheme}>{children}</ChakraProvider>

}
export default Chakra