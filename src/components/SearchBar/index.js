import './index.css';
import { useState } from 'react';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Button from '../Button';


const SearchBar = () => {
    
    const [searchValue, setSearchValue] = useState('');

    const handleChange = e => {
        setSearchValue(e.target.value);
    };

    const handleClick = () => {
        console.log(searchValue);
        
    };

    const hendleSubmit = e => {
        e.preventDefault();
    };


    return (
        
        <form className="search-bar" onSubmit={hendleSubmit}>
            <Input placeholder="Filter by title, companies, expertise..." type="search"/>
            <Input placeholder="Filter by location..." type="localisation"/>
            <Checkbox value="Full Time"/>
            
            <Button className="btn1 btn-search" value="Search"
            type='submit' />

        </form>
    );
};

export default SearchBar;