import React from 'react';
import axios from 'axios';
import './App.css';
import RazasLoros from './Loros/RazasLoros';
import DetallesLoros from './Loros/DetallesLoros';
import FormLoros from './Loros/FormLoros';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loros: [ ],
      lorosActual: {}
    }

    this.actualizarLoro = this.actualizarLoro.bind(this)
  }

  componentDidMount(){
    const url = 'http://localhost:5000/loros'
    axios.get(url)
    .then((respuesta)=>{
      //actualizar estado loros:
      this.setState({
        loros: respuesta.data
      })
      this.setState({
        loros: respuesta.data,
        lorosActual: respuesta.data[0]
      })
      console.log(respuesta)
    })
    .catch((error)=>console.log(error))
  }

  //Asignar el estado: loroActual
  actualizarLoro(loro){
    this.setState(
      {
        lorosActual:loro
      }
    )
  }

  render(){
  return (
    <div className="container-fluid">
         <div className="row">
        <div className="col s12">
          <nav>
          <div class="nav-wrapper">
              <a href="#" className="brand-logo">LOROCRM</a> 
        </div>
      </nav>
    </div>
        </div>
          <div className="row">
          <div className="col s3">
              <RazasLoros
                       Razas={this.state.loros} 
                       actualizarLoro={this.actualizarLoro} />
        </div>
          <div className="col s9">
              <DetallesLoros
                       loritos = {this.state.lorosActual} />
        </div>
          <div className="row">
            <div className="col s12">
                <FormLoros />
            </div>
          </div>
        </div>
    </div>
  );
}
}
  

export default App;

