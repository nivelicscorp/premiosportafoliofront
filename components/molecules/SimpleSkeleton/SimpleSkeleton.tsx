const SimpleSkeleton = () => {
  return (
    <div
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    >
      <div
        style={{
          background: '#ccc',
          height: '20px',
          borderRadius: '4px',
          width: '50%',
          marginBottom: '10px',
        }}
      ></div>
      <div
        style={{
          background: '#ccc',
          height: '20px',
          borderRadius: '4px',
          width: '100%',
        }}
      ></div>
    </div>
  )
}

export default SimpleSkeleton
