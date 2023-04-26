import './index.css';
import Card from '../Card';
import Button from '../Button';
import { useState, useEffect } from 'react';


const CardContainer = ({datas}) => {

    const [sliceEnd, setSliceEnd] = useState(12);

    if(datas){
        return (
            <>
                <div className="card-container">
                {
                /* ensemble de 12 cards */    
                    datas.slice(0,sliceEnd).map((offer) => {
                        return <Card key={offer._id} dataOffer={offer} />
                    })
                }        
                </div>
                <Button className="btn1 btn-loadmore" value="Load More" onClick={() => setSliceEnd(sliceEnd+12)}/>
                </>
        );   
    };
};

export default CardContainer;