import Logo from '../Logo';
import Toggle from '../Toggle';
import sun from '../../sources/imgs/sun.svg';
import moon from '../../sources/imgs/moon.svg';
import './index.css';


const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="dark-mode-selector">
                <img src={sun} alt='light mode'/>
                <Toggle/>
                <img src={moon} alt='dark mode'/>
            </div>

        </div>
    );
};

export default Header;