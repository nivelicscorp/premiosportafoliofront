import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import MainBanner from '@molecules/MainBanner/MainBanner'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import type { NextPage } from 'next'
import Image from 'next/image'

// import styles from '@styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <MainBanner />
        <BtnFloat />
        <CategoriesSection />
      </main>
    </div>
  )
}

export default Home
