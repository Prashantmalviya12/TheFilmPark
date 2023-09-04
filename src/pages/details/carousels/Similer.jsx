import React from 'react'
import './Carousels.css'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel/Carousel'

function Similer({mediaType,id}) {
    const{data,loading} = useFetch(`/${mediaType}/${id}/similar`)
    const title = mediaType === "tv" ? "Similar TV Shows":"Similar Movies"

  return (
    <div className='contentWrapper'>
      <div className='carouselsTitle'>
        {title}
        </div>
        <Carousel
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
        />

    </div>
  )
}

export default Similer