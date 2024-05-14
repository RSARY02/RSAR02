import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [requestSchema, setRequestSchema] = useState('');
    const [responseSchema, setResponseSchema] = useState('');
    const [url, setUrl] = useState('');
    const [isValid, setIsValid] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            if(requestSchema.trim()!=="" && responseSchema.trim()!==""){
                JSON.parse(requestSchema);
                JSON.parse(responseSchema);
                setIsValid(true);
                console.log('Form Submitted');
            }else{
                setIsValid(false);
                console.error('Request and response schemas cannot be empty');
            }     
    }catch(error){
        setIsValid(false);
        console.error('Invalid JSON format', error);
    }
};
return(
    <div className="container">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Service Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} required/>
                <label>Request Schema</label>
                <textarea value={requestSchema} onChange={(event) => setRequestSchema(event.target.value)}/>
                <label>Response Schema</label>
                <textarea value={responseSchema} onChange={(event) => setResponseSchema(event.target.value)}/>
                <label>URL of the Service</label>
                <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} required/>
                <button type="submit">Submit</button>
                {isValid === true && (<p>Form is Valid!</p>)}
                {isValid === false && (<p>Form is invalid! Please check the input</p>)}
            </form>
        </div>
    </div>
)
};

export default Form;