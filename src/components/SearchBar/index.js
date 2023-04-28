import './index.css';
import { useEffect, useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { getSearchOffer } from '../../api/request';


const SearchBar = () => {
    
    //stockage de l'input position, company
    const [searchPosition, setSearchPosition] = useState('""');

    //stockage de l'input Location
    const [searchLocation, setSearchLocation] = useState('""');

    //url de la requête
    const [urlSearch, setUrlSearch] = useState('');

    const [offer, setOffer] = useState([]);

    const handleChangeInputLocation = (e) => {
        setSearchLocation(e.target.value);
    };
    const handleChangeInputPosition = (e) => {
        setSearchPosition(e.target.value);
    };

    useEffect(() => {
    
        setUrlSearch(`location=${searchLocation}`);
        console.log(urlSearch);
        const getOffer = async () => {
            const response = await getSearchOffer(urlSearch);
             //mise à jour de offer
            setOffer(response);
        };
        //execution des functions en fin de useEffect
        getOffer();
    },[searchLocation,searchPosition, urlSearch]);

    const hendleSubmit = e => {
        e.preventDefault();
        getSearchOffer(urlSearch);
        console.log(offer);
        
    };

    return (
        
        <form className="search-bar" onSubmit={hendleSubmit}>
            <Input 
                placeholder="Filter by title, company ..." 
                type="search" 
                id="inputSearchPositionCompany"
                onChange={handleChangeInputPosition}/>
            <Input 
                type="text" 
                placeholder="Filter by location..."
                id="inputSearchLocation"
                onChange={handleChangeInputLocation}/>
            
            
            <Checkbox value="Full Time"/>
            
            <Button className="btn1 btn-search" value="Search"
            type='submit' />

        </form>
    );
};

export default SearchBar;