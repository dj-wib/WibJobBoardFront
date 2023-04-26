import './index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Card = ({dataOffer}) => {

    //destructuration de dataOffer
    const {_id, logo, postedAt, contract, company, location, position } = dataOffer;

    //gestion de la date et du délais entre publication de l'annonce et maintenant
    const date = moment(postedAt).fromNow();

    //gestion du contract
    let typeContract;
    if(contract){
        typeContract = "Full Time";
    } else {
        typeContract = "Part Time";
    }

    //création de l'url pour aller en single
    const url = `http://localhost:3000/jobs/${_id}`;
    

    return (
        <div className="card">

            <Link to={`${url}` }className='Single'>

            <img
                src={logo}
                alt="logo business"
            />
            
            <p className="information-card">{date} <span className='point-card'>•</span>  {typeContract}</p>
            <h1 className="post-card">{position}</h1>

            <p className="company-card">{company}</p>
            <p className="location-card">{location}</p>

            </Link>
        </div>
    );
};

export default Card;