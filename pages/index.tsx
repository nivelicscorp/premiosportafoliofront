import { BtnFloat } from '@atoms/BtnFloat/BtnFloat'
import CategoriesSection from '@organisms/CategoriesSection/CategoriesSection'
import { CategoryCard } from '@interfaces/categories'
import type { GetServerSideProps, NextPage } from 'next'

type Props = {
  categories: CategoryCard[]
}
const Home: NextPage<Props> = ({ categories }) => {
  return (
    <>
      <BtnFloat />
      <CategoriesSection categories={categories} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const categories: CategoryCard[] = [
    {
      title: 'Gestión del Recurso Humano',
      description:
        'Recompensa la labor de los profesores que a lo largo de su carrera han dado muestra de excelencia en la enseñanza en las áreas de administración de empresas, Economía o Ingeniería en todo el país.',
      types: ['Profesores', 'Carreras', 'Ingeniería'],
      icon: 'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg',
      image: '',
    },
    {
      title: 'Gestión del Recurso Humano',
      description:
        'Recompensa la labor de los profesores que a lo largo de su carrera han dado muestra de excelencia en la enseñanza en las áreas de administración de empresas, Economía o Ingeniería en todo el país.',
      types: ['Profesores', 'Carreras', 'Ingeniería'],
      icon: 'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg',
      image: '',
    },
    {
      title: 'Gestión del Recurso Humano',
      description:
        'Recompensa la labor de los profesores que a lo largo de su carrera han dado muestra de excelencia en la enseñanza en las áreas de administración de empresas, Economía o Ingeniería en todo el país.',
      types: ['Profesores', 'Carreras', 'Ingeniería'],
      icon: 'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg',
      image: '',
    },
    {
      title: 'Another Category',
      description: 'This is another category description.',
      types: ['Type 1', 'Type 2', 'Type 3'],
      icon: 'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg',
      image: '',
    },
    {
      title: 'Yet Another Category',
      description: 'This is yet another category description.',
      types: ['Type A', 'Type B', 'Type C'],
      icon: 'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg',
      image: '',
    },
    {
      title: 'One More Category',
      description: 'This is one more category description.',
      types: ['Type X', 'Type Y', 'Type Z'],
      icon: 'https://www.eltiempo.com/maquetacion/especiales/portafolio/2023/06/premios-portafolio-2023/img/iconosCategorias/graduated.svg',
      image: '',
    },
  ]

  return {
    props: {
      categories,
    },
  }
}

export default Home
