import { Box } from "@chakra-ui/react"
import GradientHeader from './components/Gradient-Header'

const App = () => {
  return (
    <>
      <Box
        textAlign="center"
        fontSize="xl"
        display="flex"
        minH="100vh"
        alignItems="center"
      >
        <GradientHeader
          content="Let's get this started."
          textAlign="center"
          width="100%"
          alignItems="center"
        />
      </Box>
    </>
  )
}

export default App
