import React, { useState } from 'react'
import SwitchTap from '../../../components/switchTap/SwitchTap'
import useFetch from '../../../hooks/useFetch';
import '../Home.css'
import Carousel from '../../../components/Carousel/Carousel';

function Populer() {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
       setEndpoint(tab === "Movies" ? "Movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <div className='contentWrapper'>
                <span className="carouselTitle">Populer</span>
                <SwitchTap data={["Movies", "TV"]} onTabChange={onTabChange} />
            </div>
            <Carousel data = {data?.results} loading={loading} endpoint={endpoint}/>
           
        </div>
    );
}

export default Populer