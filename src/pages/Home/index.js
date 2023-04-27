import './index.css';
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CardContainer from "../../components/CardContainer";
import { useState, useEffect } from 'react';
import {getOffers} from '../../api/request';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';



const Home = () => {
    const [offer, setOffer] = useState([]);

    useEffect(() => {
        //fonction de nom getOffer de type async pour surveillé la constante response appelant la fonction getOffers
        const getOffer = async () => {
            const response = await getOffers();
             //mise à jour de offer
            setOffer(response);
        };
        //execution des functions en fin de useEffect
        getOffer();
    },[]);

    return (
        <div className="home-container" >
            <Header />
            <SearchBar />
            <CardContainer datas={offer}/>
            <Link to="/admin/create/" className='Add Offert' >
            <Button className="btn1 header-btn" value="Add Offert"/>
            </Link>
        </div>
    );
};

export default Home;