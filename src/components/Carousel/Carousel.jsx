import React, { useRef } from 'react'
import './Carousel.css'
import { useSelector } from 'react-redux'
import Img from '../lazyLoadingImage/Img';
import dayjs from 'dayjs';
import CirculerRating from '../circulerRating/CirculerRating,';
import Genres from '../genres/Genres';
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';


function Carousel({ data, loading,endpoint}) {
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home)
    const carouselContainer = useRef();

    const navigation = (dir) =>{
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });

    }
    return (
        <div className='carousel'>
            <div className="contentWrapper">
            
                <BsFillArrowLeftCircleFill className='carouselLeftNav arrow'
                onClick={() => navigation("left")}/>
                <BsFillArrowRightCircleFill className='carouselRightNav arrow'
                 onClick={() => navigation("Right")}/>


                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path ?
                                url.poster + item.poster_path : "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                            return (
                                <div key={item.id} className='carouselItem' onClick={() =>navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <CirculerRating rating={item.vote_average.toFixed(1)} />
                                        <Genres data={item.genre_ids.slice(0, 2)} />
                                    </div>
                                    <div className="textBlock">
                                        <span className='title'>
                                            {item.title || item.name}
                                        </span>
                                        <span className='date'>
                                            {dayjs(item.release_date).format("MMM D,YYYY")}

                                        </span>
                                    </div>
                                </div>

                            )

                        })}
                    </div>
                ) : (
                    <span>

                    </span>
                )}
            </div>

        </div>
    )
}

export default Carousel