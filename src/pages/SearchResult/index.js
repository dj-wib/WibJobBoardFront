import './index.css';
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CardContainer from "../../components/CardContainer";
import { useState, useEffect } from 'react';
import {getOffers} from '../../api/request';
import Footer from "../../components/Footer";

const SearchResult = () => {
    const [offer, setOffer] = useState([]);



    return (
        <div className="home-container" >
            <Header />
            <SearchBar />
            <CardContainer datas={offer}/>
            <Footer />
        </div>
    );
};

export default SearchResult;