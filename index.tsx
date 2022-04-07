import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Hola(){
  return <h1> holi! soy el titulo </h1>;
}

function Mostrar(props){
  return <h1> holi! {props.nombre} </h1>;
}

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Karen";
    return (
      <div>
        <Hola />
        <Mostrar nombre={nombre} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
