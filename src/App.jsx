import { Box, Stack } from "@mui/material"
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Box>
        <Navbar />
        <Stack spacing={2} direction={'row'} justifyContent={'space-between'}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  )
}

export default App
