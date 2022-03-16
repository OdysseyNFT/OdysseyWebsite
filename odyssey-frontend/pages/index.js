import Head from 'next/head'
import Image from 'next/image'
import MenuBar from '../component/header/AppBar'
import ButtonAppBar from '../component/header/AppBar'
import styles from '../styles/Home.module.css'
import Footer from '../component/Footer/Footer'
import {Button, Dialog, DialogContent, Stack, Typography} from "@mui/material";
import { ThemeProvider } from '@emotion/react'
import theme from '../styles/Theme'

export default function Home() {
  return (
    <Stack marginTop={{lg: -20, xs: -10}}>
      <ThemeProvider theme={theme}>
      <MenuBar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </ThemeProvider>
       
    </Stack>
  )
}
