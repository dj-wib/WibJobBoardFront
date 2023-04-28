import './index.css';
import Header from "../../components/Header";
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Checkbox from '../../components/Checkbox';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postOffer } from '../../api/request';

const AddOffer = () => {
    const navigate = useNavigate();

    const [company, setCompany] = useState('');
    const [logo, setLogo] = useState('');
    const [logoBackground, setLogoBackground] = useState('');
    const [position, setPosition] = useState('');

    const [contract, setContract] = useState(true);

    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [apply, setApply] = useState('');
    const [description, setDescription] = useState('');
    const [requirementsContent, setRequirementsContent] = useState('');

    const [requirementsItem, setRequirementsItem] = useState([]);
    const [requirementsItem1, setRequirementsItem1] = useState('');
    const [requirementsItem2, setRequirementsItem2] = useState('');
    const [requirementsItem3, setRequirementsItem3] = useState('');
    const [requirementsItem4, setRequirementsItem4] = useState('');
    const [requirementsItem5, setRequirementsItem5] = useState('');

    const [roleContent, setRoleContent] = useState('');

    const [roleItem, setRoleItem] = useState([]);
    const [roleItem1, setRoleItem1] = useState('');
    const [roleItem2, setRoleItem2] = useState('');
    const [roleItem3, setRoleItem3] = useState('');
    const [roleItem4, setRoleItem4] = useState('');
    const [roleItem5, setRoleItem5] = useState('');

    useEffect(() => {
        // création d'un tableau regroupant les requirements
        const newRequirementItem = [requirementsItem1, requirementsItem2, requirementsItem3, requirementsItem4, requirementsItem5];
        // je retir les valeur ''
        const newRequirementItemFileter = newRequirementItem.filter((element) => {
            return element !== '';
        });
        // mettez à jour l'état roleItem avec le nouveau tableau
        setRequirementsItem(newRequirementItemFileter);

        // création d'un tableau regroupant les roles
        const newRoleItem = [roleItem1, roleItem2, roleItem3, roleItem4, roleItem5];
        // je retir les valeur ''
        const newRoleItemFileter = newRoleItem.filter((element) => {
            return element !== '';
        });
        // mettez à jour l'état roleItem avec le nouveau tableau
        setRoleItem(newRoleItemFileter);

    }, [requirementsItem1, requirementsItem2, requirementsItem3, requirementsItem4, requirementsItem5, roleItem1, roleItem2, roleItem3, roleItem4, roleItem5]);

    const handleChangeCompany = (e) => {
        setCompany(e.target.value);
    };
    const handleChangeLogo = (e) => {
        setLogo(e.target.value);
    }
    const handleChangelogoBackground = (e) => {
        setLogoBackground(e.target.value);
    }
    const handleChangePosition = (e) => {
        setPosition(e.target.value);
    }
    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    }
    const handleChangeWebsite = (e) => {
        setWebsite(e.target.value);
    }
    const handleChangeApply = (e) => {
        setApply(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleChangeRequirementsContent = (e) => {
        setRequirementsContent(e.target.value);
    }
    const handleChangeRoleContent = (e) => {
        setRoleContent(e.target.value);
    }

    //////////////////////
    //gestion des listes//
    //////////////////////

    const [itemRequired, setItemRequired] = useState(0);
    const [itemRole, setItemRole] = useState(0);

    const handleChangeSelectRequirements = (e) => {
        const newInputCount = parseFloat(e.target.value);
        setItemRequired(newInputCount);
    };

    const handleChangeSelectRole = (e) => {
        const newInputCount = parseFloat(e.target.value);
        setItemRole(newInputCount);
    };

    const inputElements = Array.from (
        {length: itemRequired},
        (_, index) => <Input key={index} type={"texte"} placeholder={`Requirement ${index + 1}`} 
        onChange={(e) => handleChangeItemRequirement(index +1, e.target.value)}/>
    );

    const handleChangeItemRequirement = (index, value) => {
        switch (index) {
            case 1:
                setRequirementsItem1(value);
                break;
            case 2:
                setRequirementsItem2(value);
                break;
            case 3:
                setRequirementsItem3(value);
                break;
            case 4:
                setRequirementsItem4(value);
                break;
            case 5:
                setRequirementsItem5(value);
                break;
            default:
                break;
        };
    };

    const inputElementsRole = Array.from (
        {length: itemRole},
        (_, index) => <Input key={index} type={"texte"} placeholder={`Role ${index + 1}`} onChange={(e) => handleChangeItemRole(index +1, e.target.value)}/>
    );

    const handleChangeItemRole = (index, value) => {
        switch (index) {
            case 1:
                setRoleItem1(value);
                break;
            case 2:
                setRoleItem2(value);
                break;
            case 3:
                setRoleItem3(value);
                break;
            case 4:
                setRoleItem4(value);
                break;
            case 5:
                setRoleItem5(value);
                break;
            default:
                break;
        };
    };

    ////////////////////////
    //gestion des chekbox//
    ///////////////////////
    const [checkedFullTime, setCheckedFullTime] = useState(false);
    const [checkedPartTime, setCheckedPartTime] = useState(false);

    const handleChangeCheckedFullTime = (e) => {
        setCheckedFullTime(e.target.checked);
        setCheckedPartTime(false);
        setContract(true);
    }
    const handleChangeCheckedPartTime = (e) => {
        setCheckedPartTime(e.target.checked);
        setCheckedFullTime(false);
        setContract(false);
    }
    ///////////////////////
    //envoi du formulaire//
    ///////////////////////
    const handleSubmit = (event) => {
        event.preventDefault();
        // Envoyer les données du formulaire
        
        //création d'un tableau de données de nom offer
        const newOfferObject = {
            "company":company,
            "logo":logo,
            "logoBackground":logoBackground,
            "position":position,
            "contract":contract,
            "location":location,
            "website":website,
            "apply":apply,
            "description":description,
            "requirements":{
                "content":requirementsContent,
                "items":requirementsItem
            },
            "role":{
                "content":roleContent,
                "items":roleItem
            }
        };

        JSON.stringify(newOfferObject);
        console.log(newOfferObject);

        //appel à la requete postOffer
        postOffer(newOfferObject);
        navigate("/");
        window.location.reload();

        
    };

    return (
        <div className="addoffer-container">
            <Header />
            <form className="addoffer-form" onSubmit={handleSubmit} >
                <h1>Add Offer</h1>
                {/* entreprise */}
                <div className='group-form'>
                    <label>Company :</label>
                    <Input 
                        type="text" placeholder="Company" id="inputCompany"
                        onChange={handleChangeCompany} />
                </div>
                {/* logo */}
                <div className='group-form'>
                    <label>Logo :</label>
                    <Input 
                        type="text" 
                        placeholder="Url for the logo"
                        id="inputLogo"
                        onChange={handleChangeLogo} />
                </div>
                {/* Background logo */}
                <div className='group-form'>
                    <label>Logo Background :</label>
                    <Input 
                        type="text" 
                        placeholder="Url for a logo Background"
                        id="inputLogoBackground"
                        onChange={handleChangelogoBackground} />
                </div>
                {/* position */}
                <div className='group-form'>
                    <label>Position :</label>
                    <Input 
                        type="text" 
                        placeholder="The post" 
                        id="inputPosition"
                        onChange={handleChangePosition}/>
                </div>
                {/* contract */}
                <div className='checkbox-container'>
                <label>Type of contract :</label>
                    <Checkbox 
                        value={"Full Time"} 
                        id="checkboxFullTime" 
                        status={checkedFullTime}
                        onChange={handleChangeCheckedFullTime}/>
                    <Checkbox 
                        value={"Part Time"} 
                        id="checkboxPartTime" 
                        status={checkedPartTime}
                        onChange={handleChangeCheckedPartTime}/>
                </div>
                {/* location */}
                <div className='group-form'>
                    <label>Location :</label>
                    <Input 
                        type="text" 
                        placeholder="Location" 
                        onChange={handleChangeLocation}/>
                </div>
                {/* website */}
                <div className='group-form'>
                    <label>Website :</label>
                    <Input 
                        type="text" 
                        placeholder="Website link" 
                        onChange={handleChangeWebsite}/>
                </div>
                {/* apply */}
                <div className='group-form'>
                    <label>Apply link :</label>
                    <Input 
                        type="text" 
                        placeholder="Apply link" 
                        onChange={handleChangeApply} />
                </div>
                {/* description */}
                <div className='group-form'>
                    <label>Description :</label> 
                    <Textarea 
                        className='textarea' 
                        placeholder="Description" 
                        type="text" 
                        onChange={handleChangeDescription}/>
                </div>

                {/* requirements */}
                <div className='group-form'>
                    <label>Requirements :</label>
                    <Textarea 
                        className='textarea' 
                        placeholder="Details for Requirements" 
                        type="text" 
                        onChange={handleChangeRequirementsContent}/>
                </div>

                <div className='group-form'>
                    <label htmlFor="Requirements-select">Choose number of Requirements:</label>
                    <select name="items-number" id="Requirements-select" onChange={handleChangeSelectRequirements}>
                        <option value="">--Please choose an option--</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div id="requirement-input-container">
                {/* // a compléter avec les inputsselon le nombre du select  */}
                    { inputElements }
                </div>

                {/* role */}
                <div className='group-form'>
                    <label>Role :</label>
                    <Textarea 
                        className='textarea' 
                        placeholder="Details What will you do" 
                        type="text" 
                        onChange={handleChangeRoleContent}/>
                </div>
                <div className='group-form'>
                    <label htmlFor="role-select">Choose number of Task:</label>
                    <select name="items-number" id="role-select" onChange={handleChangeSelectRole}>
                        <option value="">--Please choose an option--</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div id="role-input-container">
                    { inputElementsRole }
                </div>
                <input className="btn1" type="submit" value="Add Offer"/>
                
            </form>
        </div>
    );
};

export default AddOffer;