import React from 'react'
import './Carousels.css'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel/Carousel'

function Recommandation({mediaType,id}) {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`
    );

    return (
        <div>
            <div className='carouselsTitle contentWrapper'>Recommendation</div>

            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
            />
        </div>
    );
}

export default Recommandation