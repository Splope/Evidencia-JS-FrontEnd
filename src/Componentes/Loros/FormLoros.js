import React  , {Component} from "react";
import RazaLoros from "./RazasLoros";
import axios from "axios";


 class FormLoros extends React.Component{

constructor (props){

    super(props)
    this.state={

    }
}

submitNuevoLoro( event){
    event.preventDefault();
   //hacer la peticion via axios
   axios.post('http://localhost:5000/loros', {

                                                          raza: this.refs.raza.value,
                                                          tamaño : this.refs.tamaño.value,
                                                          nombre: this.refs.nombre.value,
                                                          edad: this.refs.edad.value,
                                                          
                                                          

                                                }
   ).then( response =>console.log(response.data))
   .catch( error => console.log(error))
   

}






  render(){
      return(
        <div className="row">
        <h5 className="center">Nuevo Loro</h5>
       <form className="col s12"  onSubmit={ this.submitNuevoLoro.bind(this)} >
     <div className="row">
        <div className="input-field col s6">
        <input id="raza" ref="raza" type="text" />
        <label htmlfor="raza">Raza</label>
        </div>
       <div className="input-field col s6">
       <input id="nombre" ref="nombre" type="text"/>
      <label htmlfor="nombre">Nombre</label>
      </div>
      <div className="input-field col s6">
       <input id="tamaño" ref="tamaño" type="text"/>
      <label htmlfor="tamaño">Tamaño</label>
      </div>
      <div className="input-field col s6">
       <input id="edad" ref="edad" type="text"/>
      <label htmlfor="edad">Edad</label>
      </div>



<button 
type="submit"
className="waves-effect waves-light btn #9575cd deep-purple lighten-2"
name="action">
 Registrar
</button>
</div>






</form>
  </div>
      )
  }

 }
 export default FormLoros