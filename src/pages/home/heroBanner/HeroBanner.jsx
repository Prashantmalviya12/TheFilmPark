import React, { useEffect, useState } from 'react'
import './HeroBanner.css'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadingImage/Img';
function HeroBanner() {
    const navigate = useNavigate();
    const [background, setBackground] = useState("");
    const [query, setquery] = useState("");
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrops + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);

    }, [data])

    const handleQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }

    }
    return (
        <div className='heroBanner'>
            {!loading && (
                <div className="backrop-img">
                    <Img src={background} />
                </div>
            )}
            <div className='opacity-layer'></div>
            <div className="contentWrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setquery(e.target.value)}
                            onKeyUp={handleQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroBanner