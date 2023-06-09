import './index.css';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Checkbox from "../../components/Checkbox";
import Header from "../../components/Header";
import { putOffer } from '../../api/request';

const UpdateOffer = () => {
    const navigate = useNavigate();
    
    const { id } = useParams();

    const [company, setCompany] = useState("");
    const [logo, setLogo] = useState("");
    const [logoBackground, setLogoBackground] = useState("");
    const [position, setPosition] = useState("");
    const [contract, setContract] = useState(true);
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [apply, setApply] = useState("");
    const [description, setDescription] = useState("");
    const [requirementsContent, setRequirementsContent] = useState("");
    const [requirementsItem, setRequirementsItem] = useState([]);
    const [requirementsItem1, setRequirementsItem1] = useState("");
    const [requirementsItem2, setRequirementsItem2] = useState("");
    const [requirementsItem3, setRequirementsItem3] = useState("");
    const [requirementsItem4, setRequirementsItem4] = useState("");
    const [requirementsItem5, setRequirementsItem5] = useState("");
    const [roleContent, setRoleContent] = useState("");
    const [roleItem, setRoleItem] = useState([]);
    const [roleItem1, setRoleItem1] = useState("");
    const [roleItem2, setRoleItem2] = useState("");
    const [roleItem3, setRoleItem3] = useState("");
    const [roleItem4, setRoleItem4] = useState("");
    const [roleItem5, setRoleItem5] = useState("");

    useEffect(() => {
        // Fetch the offer data from the API using the `id` parameter
        fetch(`http://localhost:8000/api/jobs/${id}`)
        .then((response) => response.json())
        .then((data) => {
            // Set the state variables to the fetched data
            setCompany(data.company);
            setLogo(data.logo);
            setLogoBackground(data.logoBackground);
            setPosition(data.position);
            setContract(data.contract);
            setLocation(data.location);
            setWebsite(data.website);
            setApply(data.apply);
            setDescription(data.description);
            setRequirementsContent(data.requirementsContent);
            setRequirementsItem(data.requirementsItem);
            setRequirementsItem1(data.requirementsItem[0] || "");
            setRequirementsItem2(data.requirementsItem[1] || "");
            setRequirementsItem3(data.requirementsItem[2] || "");
            setRequirementsItem4(data.requirementsItem[3] || "");
            setRequirementsItem5(data.requirementsItem[4] || "");
            setRoleContent(data.roleContent);
            setRoleItem(data.roleItem);
            setRoleItem1(data.roleItem[0] || "");
            setRoleItem2(data.roleItem[1] || "");
            setRoleItem3(data.roleItem[2] || "");
            setRoleItem4(data.roleItem[3] || "");
            setRoleItem5(data.roleItem[4] || "");
        })
        .catch((error) => console.error(error));
    }, [id]);


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
    const handleSubmit = (e) => {
        e.preventDefault();
        //création d'un tableau de données de nom offer
        const updatedOffer = {
            company,
            logo,
            logoBackground,
            position,
            contract,
            location,
            website,
            apply,
            description,
            requirementsContent,
            requirementsItem,
            roleContent,
            roleItem,
        };

        //appel à la requete putOffer
        putOffer(updatedOffer, id);
        navigate("/");
        window.location.reload();
    };

        return (

        <div className="updateoffer-container">
            <Header />
            <form className="updateoffer-form" onSubmit={handleSubmit} >
                <h1>Update Offer</h1>
                {/* entreprise */}
                <div className='group-form'>
                    <label>Company :</label>
                    <Input 
                        type="text" placeholder="Company" id="inputCompany"
                        onChange={handleChangeCompany}
                        value={company} />
                </div>
                {/* logo */}
                <div className='group-form'>
                    <label>Logo :</label>
                    <Input 
                        type="text" 
                        placeholder="Url for the logo"
                        id="inputLogo"
                        onChange={handleChangeLogo}
                        value={logo} />
                </div>
                {/* Background logo */}
                <div className='group-form'>
                    <label>Logo Background :</label>
                    <Input 
                        type="text" 
                        placeholder="Url for a logo Background"
                        id="inputLogoBackground"
                        onChange={handleChangelogoBackground}
                        value={logoBackground} />
                </div>
                {/* position */}
                <div className='group-form'>
                    <label>Position :</label>
                    <Input 
                        type="text" 
                        placeholder="The post" 
                        id="inputPosition"
                        onChange={handleChangePosition}
                        value={position} />
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
                        onChange={handleChangeLocation}
                        value={location}/>
                </div>
                {/* website */}
                <div className='group-form'>
                    <label>Website :</label>
                    <Input 
                        type="text" 
                        placeholder="Website link" 
                        onChange={handleChangeWebsite}
                        value={website}/>
                </div>
                {/* apply */}
                <div className='group-form'>
                    <label>Apply link :</label>
                    <Input 
                        type="text" 
                        placeholder="Apply link" 
                        onChange={handleChangeApply} 
                        value={apply}/>
                </div>
                {/* description */}
                <div className='group-form'>
                    <label>Description :</label> 
                    <Textarea 
                        className='textarea' 
                        placeholder="Description" 
                        type="text" 
                        onChange={handleChangeDescription}
                        value={description} />
                </div>
                {/* requirements */}
                {/* <div className='group-form'>
                    <label>Requirements :</label>
                    <Textarea 
                        className='textarea' 
                        placeholder="Details for Requirements" 
                        type="text" 
                        onChange={handleChangeRequirementsContent}
                        value={requirementsContent} />
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

                <div id="requirement-input-container"> */}
                {/* // a compléter avec les inputsselon le nombre du select  */}
                    {/* { inputElements }
                </div> */}

                {/* role */}
                {/* <div className='group-form'>
                    <label>Role :</label>
                    <Textarea 
                        className='textarea' 
                        placeholder="Details What will you do" 
                        type="text" 
                        onChange={handleChangeRoleContent}
                        value={roleContent} />
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
                </div> */}

                <input className="btn1" type="submit" value="Update Offer"/>
            </form>
        </div>
    );
};

export default UpdateOffer;