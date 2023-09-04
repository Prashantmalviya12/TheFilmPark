import React, { useEffect, useState } from 'react'
import SwitchTap from '../../../components/switchTap/SwitchTap'
import useFetch from '../../../hooks/useFetch';
import '../Home.css'
import Carousel from '../../../components/Carousel/Carousel';

function Trending(){
    const [endpoint, setEndpoint] = useState("day");
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        const word = tab === "Day" ? "day" : "week"
        setEndpoint(word);
    };

    return (
        <div className="carouselSection">
           <div className="contentWrapper">
                <span className="carouselTitle">Trending</span>
                <SwitchTap data={["Day", "Week"]} onTabChange={onTabChange} />
           </div>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending