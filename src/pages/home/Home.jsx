import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending/Trending'
import Populer from './populer/Populer'
import TopRated from './topRated/TopRated'

function Home() {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Populer/>
      <TopRated/>
      </div>
  )
}

export default Home