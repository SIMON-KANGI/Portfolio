'use client'
import { ChakraProvider } from "@chakra-ui/react"
import appTheme from "../theme/Theme"
import Mouse from "../theme/Mouse"
function Chakra({children}){
    return <ChakraProvider theme={appTheme}>{children}</ChakraProvider>

}
export default Chakra