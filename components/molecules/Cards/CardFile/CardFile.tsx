import Image from 'next/image'

interface CardFileProps {
  name: string
  handleClick?: () => void
}

const CardFile = ({ name, handleClick }: CardFileProps) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        position: 'relative',
        width: '100%',
      }}
    >
      <div style={{ width: '15px', height: '15px' }}>
        <Image
          src={'/img/icon/pdf_icon.png'}
          alt='icon'
          width={15}
          height={15}
        />
      </div>
      <p>{name}</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='23.999'
        height='17.209'
        onClick={handleClick}
        viewBox='0 0 23.999 17.209'
      >
        <path
          id='Unión_51'
          data-name='Unión 51'
          d='M7.075,17.159a.374.374,0,0,1-.138-.512L16.439.188a.375.375,0,1,1,.65.374l-9.5,16.459a.375.375,0,0,1-.512.137ZM9,16.265l.018-.03,1.108-1.919A6,6,0,0,0,16,4.144l1.368-2.37A13.708,13.708,0,0,1,23.854,8a1.353,1.353,0,0,1,0,1.217A13.342,13.342,0,0,1,12,16.613,13.018,13.018,0,0,1,9,16.265Zm-2.079-.681A13.653,13.653,0,0,1,.145,9.221a1.352,1.352,0,0,1,0-1.216A13.341,13.341,0,0,1,12,.613a12.981,12.981,0,0,1,3.212.4L14.076,2.982A6,6,0,0,0,8.162,13.226L7.074,15.11a1.117,1.117,0,0,0-.148.472h0Zm4.25-3.076,3.8-6.577a3.991,3.991,0,0,1-2.964,6.665A4.044,4.044,0,0,1,11.175,12.507ZM9.2,11.434A4,4,0,0,1,8.158,7.558a1.994,1.994,0,0,0,2.787-2.787A3.939,3.939,0,0,1,12,4.613h.011a4.007,4.007,0,0,1,1.044.139L9.2,11.434h0Z'
          transform='translate(0 0)'
          fill='#a0a0a0'
        />
      </svg>
    </div>
  )
}

export default CardFile
