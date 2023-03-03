import { useState } from "react"

export default function CarSelected() {
    let [selectedCar, setSelectedCar] = useState({
        car: "",
        color: ""
    });

    const handleSelectedCar = () => {
        let carSelected = document.getElementById('carSelected').value,
            colorSelected = document.getElementById('colorSelected').value
        setSelectedCar({
            car: carSelected,
            color: colorSelected
        });
    }

    return(
        <div>
            <h1 style={{textTransform:"uppercase"}}>select your favourite car</h1>
            <p >Select a car 
                <span style={{paddingLeft:10}}>
                    <select name="" id="carSelected" onChange={handleSelectedCar}>
                        <option value="">...</option>
                        <option value="Mercedes S600">Mercedes S600</option>
                        <option value="Ford Thung ton">Ford Thung ton</option>
                    </select>
                </span>
            </p>

            <p>Select car's color 
                <span style={{paddingLeft:10}}>
                    <select name="" id="colorSelected" onChange={handleSelectedCar}>
                        <option value="">...</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                    </select>
                </span>
            </p>
            <h3>Your favourite is {selectedCar.car} - {selectedCar.color}</h3>
        </div>
    )
}
