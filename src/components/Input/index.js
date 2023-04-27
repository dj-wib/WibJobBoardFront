import './index.css';
import search from '../../sources/imgs/search.svg';
import localisation from '../../sources/imgs/localisationIcon.svg';

const Input = ({placeholder, type, id, onChange, key} ) => {

    let srcIcone;

switch (type) {
    case 'search':
        srcIcone = search;
        break;
    case 'localisation':
        srcIcone = localisation;
        break;
    default:
        break;
}

    if(srcIcone){
        return (
            <div className='input-container'>
            <input 
                id={id}
                className='input'
                type="text"
                placeholder={placeholder}
                />
            <img className='icon-input' src={srcIcone} alt='logo type of input'></img>
            </div>
        );
    }else{


        return (
            <div className='input-container'>
            <input 
                id={id}
                className='input'
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                />
            </div>
        );}
};

export default Input;