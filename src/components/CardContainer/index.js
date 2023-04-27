import './index.css';
import Card from '../Card';
import Button from '../Button';
import { useState, useEffect } from 'react';



const CardContainer = ({datas}) => {

    const [sliceEnd, setSliceEnd] = useState(12);
    const [statusBtn, setStatusBtn] = useState(false);
    const [valueBtn, setValueBtn] = useState("Load More");

    
    const numberOfOffers = datas.length;

    useEffect(() => {
        if (sliceEnd > numberOfOffers) {
            setStatusBtn(true);
            setValueBtn("it's all");
        } else {
            setStatusBtn(false);
            setValueBtn("Load More");
        }
    }, [sliceEnd, numberOfOffers]);


    if(datas){
        
        return (
            <>
                <div className="card-container">
                {
                /* ensemble de 12 cards */    
                    datas.slice(0,sliceEnd).map((offer) => {
                        return <Card key={offer._id} dataOffer={offer} statusBtn={statusBtn}/>
                    })
                }        
                </div>
                <Button className="btn1 btn-loadmore" value={valueBtn} onClick={() => setSliceEnd(sliceEnd+12)} statusBtn={statusBtn}/>
                </>
        );   
    };
};

export default CardContainer;