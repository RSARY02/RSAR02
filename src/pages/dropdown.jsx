import React, {useState} from "react";

const Dropdown = () =>{
    const [selectedService, setSelectedService] = useState(null);
    const [showUnderlying, setShowUnderlying] = useState(false);

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setShowUnderlying(true);
    };

    const services = [
        {name: 'Service A', underlying: ['Sub Service A1', 'Sub Service A2']},
        {name: 'Service B', underlying: ['Sub Service B1', 'Sub Service B2']},
        {name: 'Service C', underlying: ['Sub Service C1', 'Sub Service C2']},
    ];

    return (
        <div >
        <div className="dropdown-container">
            <h1>Services</h1>
            <div className="dropdown">
            <select onChange={(e)=> handleServiceClick(e.target.value)}>
                <option value="">Select a service</option>
                {services.map((service, index) => (
                    <option key={index} value={service.name}>
                        {service.name}
                    </option>
                ))}
            </select>
            </div>
            </div>
            <div className="sub-services-container">
            {showUnderlying && selectedService && (
            <div className="sub-services">
                <h3>Underlying services for {selectedService}:</h3>
                <ul>
                    {services
                    .find((service)=> service.name === selectedService)
                    .underlying.map((underlying, index)=>(
                        <button className="buttons" key={index} draggable="true">{underlying}</button>
                    ))}
                </ul>
            </div>
            )}
        </div>
        </div>
    );
};

export default Dropdown;