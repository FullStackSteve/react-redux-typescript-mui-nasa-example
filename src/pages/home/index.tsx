import logo from 'src/logo.svg'
import { Typography } from '@mui/material'
import { Layout, ButtonGroup } from 'src/ui/components'

function Home() {
   return (
      <Layout>
         <img src={logo} className="App-logo" alt="logo" />
         <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
            Edit <code>src/App.tsx</code> and save to reload.
         </Typography>
         <ButtonGroup />
      </Layout>
   )
}

export default Home
