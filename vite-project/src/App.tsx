import { ChakraProvider } from '@chakra-ui/react'
import { defaultSystem, Box } from "@chakra-ui/react"
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {

  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <Box pt="5rem">
        <Todos />
      </Box>
    </ChakraProvider>
  )
}

export default App;