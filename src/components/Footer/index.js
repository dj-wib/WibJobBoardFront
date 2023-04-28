import './index.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className="footer-container">
        <div className="footer-partLeft">
            <h4>{}</h4>
        </div>
        <Link to="/admin/create/" className='Add Offert' >
            <Button className="btn1 header-btn" value="Add Offert"/>
        </Link>
    </div>

    );
};

export default Footer;