import { useState } from "react";

function SearchHeader({ search }) {  

    const [valueInput, setValueInput] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();   //stop browser loading 
        search(valueInput); 
    };
     
    const handleChange = (event) => {
        setValueInput(event.target.value);
    };

    return ( 
        <div className="searchDiv">
            <form className="form" onSubmit = {handleFormSubmit}>

                <div className="labelDiv">
                    <label>Ne görmek istersiniz?</label>
                </div>
            
                <div className="inputDiv">
                   <input name="input" value={valueInput} onChange={handleChange}/> 
                </div> 
                   
            </form> 
        </div>
     );
}

export default SearchHeader;