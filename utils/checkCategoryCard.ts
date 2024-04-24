const checkCategoryCard = (categoryName: string, styles: any) => {
  switch (categoryName) {
    case 'Esfuerzo exportador':
      return styles?.export
    case 'Protección al medio ambiente':
      return styles?.environment
    case 'Servicio al cliente':
      return styles?.client
    case 'Transformación digital':
      return styles?.digital
    case 'Mejor docente universitario':
      return styles?.master
    case 'Mejor estudiante universitario':
      return styles?.student
    case 'Responsabilidad social empresarial':
      return styles?.social
    case 'Mejor líder empresarial':
      return styles?.leader
    case 'Gestión del recurso humano':
      return styles?.humanResourses
    case 'Innovación':
      return styles?.innovation
    case 'Aporte a la comunidad':
      return styles?.community
    default:
      return ''
  }
}

export default checkCategoryCard
