import getPostulations from '@actions/getPostulations'
import Button from '@atoms/Button/Button'
import CardPostulation from '@molecules/Cards/CardPostulation/CardPostulation'
import SimpleSkeleton from '@molecules/SimpleSkeleton/SimpleSkeleton'
import decryptCryptoData from '@utils/decryptCryptoData'
import { getCookie } from 'cookies-next'
import { useState, useEffect, Fragment } from 'react'

const MyPostulations = () => {
  const [postulations, setPostulations] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState(3)
  useEffect(() => {
    const decypherData = async () => {
      const deciphedData = await decryptCryptoData(getCookie('user-data'))
      const userDataParsed = JSON.parse(deciphedData ?? '{}')
      getPostulations(
        userDataParsed?.current_user?.uid,
        userDataParsed?.csrf_token,
        userDataParsed?.current_user?.role
      ).then((res) => {
        setLoading(false)
        setPostulations(res)
      })
    }
    decypherData()
  }, [])
  return (
    <div>
      <h1>Mis postulaciones</h1>
      {loading && (
        <>
          <SimpleSkeleton /> <SimpleSkeleton /> <SimpleSkeleton />
        </>
      )}
      {!loading && postulations.length === 0 && <p>No tienes postulaciones</p>}
      {!loading &&
        postulations.slice(0, pagination).map((postulation, index) => (
          <Fragment key={index}>
            <CardPostulation
              title='Categoría'
              description={postulation}
              numeration={index + 1}
            />
          </Fragment>
        ))}
      {postulations.length > pagination && (
        <Button
          title='Ver más'
          clickHandler={() => setPagination(pagination + 3)}
          variant='primary'
        />
      )}
    </div>
  )
}

export default MyPostulations
