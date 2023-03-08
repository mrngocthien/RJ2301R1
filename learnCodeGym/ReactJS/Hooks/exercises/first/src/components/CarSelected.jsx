import { useState } from "react"

export default function CarSelected() {
    const [selectedCar, setSelectedCar] = useState({
        car: "",
        color: ""
    });

    const handleSelectedCar = (event) => {
        const { id, value } = event.target;
        setSelectedCar(prevSelectedCar => ({
            ...prevSelectedCar,
            [id]: value
        }));
    }

    return(
        <div>
            <h1 style={{textTransform:"uppercase"}}>select your favourite car</h1>
            <p >Select a car 
                <span style={{paddingLeft:10}}>
                    <select name="" id="car" onChange={handleSelectedCar}>
                        <option value="">...</option>
                        <option value="Mercedes S600">Mercedes S600</option>
                        <option value="Ford Thung ton">Ford Thung ton</option>
                    </select>
                </span>
            </p>

            <p>Select car's color 
                <span style={{paddingLeft:10}}>
                    <select name="" id="color" onChange={handleSelectedCar}>
                        <option value="">...</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                    </select>
                </span>
            </p>
            <h3>Your favourite car is {selectedCar.car} - {selectedCar.color}</h3>
        </div>
    )
}
