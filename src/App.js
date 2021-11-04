import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      cars: [
        {name: 'Ford Focus', year: 2018},
        {name: 'Audi A7', year: 2016},
        {name: 'Mazda CX5', year: 2010}
      ],
      pageTitle: 'Information about cars',
      showCars: false
    }
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
          <ErrorBoundary key={i}>
            <Car name={car.name} year={car.year} index={i}
              onDelete={this.deleteHandler.bind(this, i)}
              onChangeName={e => this.onChangeName(e.target.value, i)} />
          </ErrorBoundary>
          
        )
      })
    }
    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <br />
        <button style={{marginTop: 10}}
        onClick={this.toggleCarsHandler}>Show cars / Hide cars</button>
        <button onClick={() => this.setState({clicked: true})}>Click</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
          { cars }
        </div>
      </div>
    );
  }
}

export default App;