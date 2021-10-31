import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford Focus', year: 2018},
      {name: 'Audi A7', year: 2016},
      {name: 'Mazda CX5', year: 2010}
    ],
    pageTitle: 'Information about cars',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, i) => {
    const car = this.state.cars[i];  // получаем машину по индексу
    car.name = name;   // изменяем имя на новое
    const cars = [...this.state.cars];  // создаем новый массив и с помощью spread-оператора создаем клон массива cars из state
    cars[i] = car;   // присваиваем новые машины в массив
    this.setState({cars});  // обновляем state
  }

  deleteHandler = i => {
    const cars = [...this.state.cars];
    cars.splice(i, 1);
    this.setState({cars});
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, i) => {
        return (
          <Car key={i} name={car.name} year={car.year}
            onDelete={this.deleteHandler.bind(this, i)}
            onChangeName={e => this.onChangeName(e.target.value, i)}
          />
        )
      })
    }
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Show cars / Hide cars</button>
        { cars }
      </div>
    );
  }
}

export default App;