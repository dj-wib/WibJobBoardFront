import './index.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import { getOfferById } from '../../api/request';
import Button from '../../components/Button';
import moment from 'moment';



const Single = () => {

    const {id} = useParams();

    const [dataOffer, setDataOffer] = useState([]);

    useEffect (() => {
        const getData = async () => {
            
            const response = await getOfferById(id);
            setDataOffer(response);
        };

        getData();
    },[]);




    //destructuration de dataOffer
    const {company, logo, position, postedAt, contract, location, website, description } = dataOffer;

    

    //gestion de la date et du délais entre publication de l'annonce et maintenant
    const date = moment(postedAt).fromNow();

    //gestion du contract
    let typeContract;
    if(contract){
        typeContract = "Full Time";
    } else {
        typeContract = "Part Time";
    };



    //ATTENTION IL FAUT LANCER UNE RECHERCHE AVEC LE MEME NOM DE POST POUR FAIRE LE FOOTER AVEC LE RESULTAT DE LA RECHERCHE METTRE LE POST ET L'ENTREPRISE.




    //création de l'url pour aller en home
    const url = `http://localhost:3000`;


    return (
            <div className="single-container" >
            <Header/>
            <div className="single-offer-header">
                <img src={logo} alt="logo business"/>
                <h2>{company}</h2>
                <p>{website}</p>
                <Button className="btn2" value="Compagny site" />
            </div>
            <div className="single-offer-body">
                <div className='single-offer-body-part1'>
                    <p className="information-card">{date} <span className='point-card'>•</span>  {typeContract}</p>
                    <h1>{position}</h1>
                    <p>{location}</p>
                    <Button className="btn1" value="Apply" />
                </div>
                <div className='single-offer-body-part2'>
                    <p>{description}</p>
                    <h3>Requirements</h3>
                    <p>{dataOffer.requirements && dataOffer.requirements.content}</p>

                    <ul>
                        { dataOffer.requirements && dataOffer.requirements.items.map(item => (
                            <li>{item}</li>
                        ))
                        }
                    </ul>
                    <h3>Role</h3>
                    <p>{dataOffer.role && dataOffer.role.content}</p>
                    <ol>
                        {
                            dataOffer.role && dataOffer.role.items.map(item => (
                                <li>{item}</li>
                            ))
                        }
                    </ol>

                </div>
            </div>
            <div className="single-offer-footer">
                <div className="single-offer-footer-left">
                    <h4>{}</h4>
                </div>
                <div className="single-offer-footer-right">
                    <Button className="btn1" value="Apply Now" />
                </div>
            </div>
        </div>

        

    );
};

export default Single;