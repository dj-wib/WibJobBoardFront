import './index.css';


const Textarea = ({placeholder, onChange} ) => {


        return (
            <div className='textarea-container'>
            <textarea 
                className='textarea'
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                />
            </div>
        );
};

export default Textarea;