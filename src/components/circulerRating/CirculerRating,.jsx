import React from 'react'
import './CirculerRating.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CirculerRating({rating}) {
  return (
    <div className='circulerRating'>
        <CircularProgressbar 
          value={rating}
          maxValue={10}
          text={rating}
          styles={buildStyles({
            pathColor:
                rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
          />

    </div>
  )
}

export default CirculerRating