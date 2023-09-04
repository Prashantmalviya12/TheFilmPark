import React from 'react'
import DetailBanner from './detailBanner/DetailBanner'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Similer from './carousels/Similer';
import Recommandation from './carousels/Recommandation';
import Cast from './Cast/Cast';

function Details() {
  const { mediaType, id } = useParams();

    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailBanner video={data?.results[data?.results.length-1]} crew = {credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <Similer mediaType={mediaType} id={id}/>
      <Recommandation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details