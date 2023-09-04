import React, { useState } from 'react'
import SwitchTap from '../../../components/switchTap/SwitchTap'
import useFetch from '../../../hooks/useFetch';
import '../Home.css'
import Carousel from '../../../components/Carousel/Carousel';


function TopRated() {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <div className="contentWrapper">
                <span className="carouselTitle">Top Rated</span>
                <SwitchTap
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </div>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
}

export default TopRated