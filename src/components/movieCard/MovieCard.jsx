import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Img from '../lazyLoadingImage/Img';
import CirculerRating from '../circulerRating/CirculerRating,';
import Genres from '../genres/Genres';
import dayjs from 'dayjs';
import './MovieCard.css'

function MovieCard({ data, fromSearch, mediaType }) {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const postUrl = data.poster_path ? url.poster + data.poster_path : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"

    return (

           
        <div key={data.id} className='movieCard' onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}>

            <div className="posterBlock">
                <Img src={postUrl} />
                {!fromSearch && (
                    <React.Fragment>
                        <CirculerRating rating={data.vote_average.toFixed(1)} />
                        <Genres data={data.genre_ids.slice(0, 2)} />             
                    </React.Fragment>
                )}
            </div>
            <div className="textBlock">
                <span className='title'>
                    {data.title || data.name}
                </span>
                <span className='date'>
                    {dayjs(data.release_date).format("MMM D,YYYY")}

                </span>
            </div>
        </div>
            
    );
}

export default MovieCard