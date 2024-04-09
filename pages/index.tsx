import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import MainBanner from '@molecules/MainBanner/MainBanner'
import type { NextPage } from 'next'
import Image from 'next/image'
// import styles from '@styles/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <MainBanner />
        <BtnFloat />
      </main>
    </div>
  )
}

export default Home
