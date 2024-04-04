import { memo } from 'react'
const BasicMainBanner = () => {
  return (
    <div
      style={{
        background: 'red',
        height: '250px',
        width: '100vw',
        textAlign: 'center',
      }}
    >
      <h1>BasicMainBanner works</h1>
    </div>
  )
}

export default memo(BasicMainBanner)
