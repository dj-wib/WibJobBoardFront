import './index.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';


const Card = ({dataOffer}) => {
    const navigate = useNavigate();

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
    

    const handleClik = async (_id) => {
        //Delete offer
    const deleteOffer = async (_id) => {
    try {
        const response = await fetch(`http://localhost:8000/api/jobs/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const newOffer = await response.json();
        return newOffer;
    } catch (error) {
        console.error("error", error);
        return null;
    }
};
        deleteOffer(_id);
        window.scrollTo(0, 0);
        window.location.reload();
    };

    return (
        <div className="card">

            <div id='trash-card' className='trash-card'>
                <Button className='trash-btn' onClick={()=>handleClik(_id)}/>
            </div>
            <div id='update-card' className='update-card'>
                <Button className='update-btn' onClick={()=>navigate(`/update/${_id}`)}/>
            </div>

            <img className='logo-card'
                src={logo}
                alt="logo business"
            />
            
            <p className="information-card">{date} <span className='point-card'>•</span>  {typeContract}</p>
            
            <Link to={`${url}` }className='Single'>
            <h1 className="post-card">{position}</h1>
            </Link>

            <p className="company-card">{company}</p>
            <p className="location-card">{location}</p>

            

        </div>
    );
};

export default Card;