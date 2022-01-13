import { useState } from 'react';

const Car = () => {

    const [brand, setBrand] = useState('Audi');
    const [model, setModel] = useState('A3');
    const [colour, setColour] = useState('black');
    const [year, setYear] = useState('2013');
    return (
        <div>
            <h2>Car</h2>
            <label>Brand:</label>
            <input type="text" name="brand" value={brand}
                onChange={(event) => {
                    setBrand(event.target.value)
                }} />
            <label>Model:</label>
            <input type="text" name="model" value={model}
                onChange={(event) => {
                    setModel(event.target.value)
                }} />
            <label>Colour:</label>
            <input type="text" name="colour" value={colour}
                onChange={(event) => {
                    setColour(event.target.value)
                }} />
            <label>Year:</label>
            <input type="text" name="year" value={year}
                onChange={(event) => {
                    setYear(event.target.value)
                }} />
            <button type="Button" onClick={() => {
                console.log(brand, model, colour, year);
            }} />
            <h3>Brand: {brand}</h3>
            <h3>Model: {model}</h3>
            <h3>Colour: {colour}</h3>
            <h3>Year: {year}</h3>
        </div>
    );
}

export default Car;