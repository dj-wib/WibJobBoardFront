import './index.css';

const Checkbox = ({value}) => {
    return (

        <label className="container">{value}
        <input type="checkbox" className="checkbox"/>
        <span className="checkmark"></span>
        </label>

    );
};

export default Checkbox;