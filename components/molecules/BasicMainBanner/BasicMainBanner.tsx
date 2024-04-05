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
      <h2>BasicMainBanner works</h2>
    </div>
  )
}

export default memo(BasicMainBanner)
