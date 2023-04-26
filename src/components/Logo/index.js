import './index.css';
import logo from '../../sources/imgs/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt='logo site'></img>
        </div>
    );
};

export default Logo;