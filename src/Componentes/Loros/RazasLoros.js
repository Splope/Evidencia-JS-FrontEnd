import React from "react";

const RazasLoros = (props) => {
    return(
        <>
        <ul className="collection with-header">
          <li className="collection-header"><h5>Loros</h5></li>
          {
              props.Razas.map( ( elemento ) => {
                  return (
                    <li
                         className="collection-item"
                         key={elemento._id}
                         onClick ={ props.actualizarLoro.bind(this, elemento)}
                    >
                             
                             {elemento.raza} {elemento.nombre}                          
                    </li>
                  )
              })
          }
      </ul>
      </>
    )
}

export default RazasLoros