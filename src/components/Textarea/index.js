import './index.css';


const Textarea = ({placeholder, onChange, value} ) => {


        return (
            <div className='textarea-container'>
            <textarea 
                className='textarea'
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                />
            </div>
        );
};

export default Textarea;