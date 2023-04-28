import Logo from '../Logo';
import Toggle from '../Toggle';
import sun from '../../sources/imgs/sun.svg';
import moon from '../../sources/imgs/moon.svg';
import './index.css';
import { useState, useEffect } from 'react';
import Button from '../Button';
import LogingForm from '../LogingForm';


const Header = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="header">
            <Logo />
            {showForm && <LogingForm/>}
            <div className="dark-mode-selector">
                <img src={sun} alt='light mode'/>
                <Toggle/>
                <img src={moon} alt='dark mode'/>
            </div>
            <Button className="btn1 header-btn" value="Admin" onClick={() => setShowForm(true)} />
        </div>
    );
};

export default Header;