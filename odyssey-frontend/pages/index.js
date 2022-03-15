import Head from 'next/head'
import Image from 'next/image'
import MenuBar from '../component/header/AppBar'
import ButtonAppBar from '../component/header/AppBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="wrap">
       <MenuBar/>
    </div>
  )
}
