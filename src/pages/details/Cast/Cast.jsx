import React from 'react'
import './Cast.css'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadingImage/Img';

function Cast({data,loading}) {
  const {url} = useSelector((state) => state.home);
  return (
    <div className="castSection ">
      <div className="sectionHeading contentWrapper">Top Cast</div>
      <div className="contentWrapper">
      {!loading ? (
        <div className='listItems'>
          {data?.map((item) => {
            let imgUrl = item.profile_path ? url.profile + item.profile_path:"https://static.thenounproject.com/png/1095867-200.png"
          return(
            <div className="listItem">
              <div className="profileImg">
                <Img src={imgUrl}/>
              </div>
              <div className="name">{item.name}</div>
              <div className="character">
                {item.character}
              </div>
            </div>
          )
          })}
        </div>
      ):(
        <div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cast