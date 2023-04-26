import './index.css';
import search from '../../sources/imgs/search.svg';
import localisation from '../../sources/imgs/localisationIcon.svg';

const Input = ({placeholder, type} ) => {

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




    return (
        <div className='input-container'>
        <input 
            className='input'
            type="text"
            placeholder={placeholder}
            />
        <img className='icon-input' src={srcIcone} alt='logo type of input'></img>
        </div>
    );
};

export default Input;