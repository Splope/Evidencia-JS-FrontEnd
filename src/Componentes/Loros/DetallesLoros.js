import React from "react";
import axios from "axios";

const DetallesLoros = (props) =>{
    return(
        <div className="row">
        <div className="col s12 m6">
          <div className="card  teal darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                  {props.loritos.raza} {props.loritos.nombre}
                  </span>
              <p>Tamaño: {props.loritos.tamaño} </p>
              <p>edad: {props.loritos.edad} </p>
            </div>
            <div class="card-action">
            <form onSubmit={ function (event){
           event.preventDefault();

           axios.delete(`http://localhost:5000/loros/${props.loritos._id}`) 
             .then(response => {
               console.log(response);
               console.log(response.data);
             })
        }
        }>
        <button className="waves-effect  red darken-2 btn"  >Eliminar</button>
        </form>
        </div>
          </div>
        </div>
      </div>
    )
}

export default DetallesLoros