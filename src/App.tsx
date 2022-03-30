import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Typography } from '@mui/material'
import { ButtonGroup } from './ui/components'
import Layout from './ui/components/Layout'

function App() {
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

export default App
