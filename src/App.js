import './App.css';
import Car from './Car/Car';
import { useState } from 'react';

function App() {
  const state = {
    cars: [
      {name: 'Ford Focus', year: 2016},
      {name: 'Audi A7', year: 2019},
      {name: 'Mazda CX5', year: 2017}
    ]
  }

  const [ pageTitle, setPageTitle ] = useState('Cars');
  const changeTitleHandler = newTitle => {
    setPageTitle(newTitle);
  }

  const [ showCars, setShowCars ] = useState(false);
  const toggleCarsHandler = () => {
    setShowCars(!showCars);
  }

  const divStyle = {
    textAlign: 'center',
  }

  let cars = null;

  if (showCars) {
    cars = state.cars.map((car, i) => {
      return (
        <Car 
          key={i} name={car.name} year={car.year}
          onChangeTitle={() => changeTitleHandler(car.name)}
        />
      )
    })
  }

  return (
    <div style={divStyle}>
      <h2>{pageTitle}</h2>
      <button onClick={toggleCarsHandler}>Toggle</button>
      { cars }
    </div>
  );
}

export default App;