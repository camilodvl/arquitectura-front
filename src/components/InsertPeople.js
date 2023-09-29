import {React, useState} from "react";
import { postPeople } from "../services/PeopleService";

const InsertPeople = () => {

    const [formulario, setFormulario]=useState({
        name: '',
        apellido: ''
    })

    //const {nombre='', apellido=""}=formulario
    
    const handledOnChange= (e)=>{
        setFormulario({...formulario, [e.target.name]:e.target.value})
        //console.log(formulario)
    }

    const handledSubmit = (e)=>{
        e.preventDefault();
        postPeople(formulario)
    }

  return (
    <div>
      <form
        onSubmit={(e) => handledSubmit(e)}
        className="m-3 border border-primary p-1 rounded border-opacity-25"
      >
        <div className="d-flex justify-content-around">
          <div className="form-group">
            <label>Nombre: </label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              aria-describedby="nombre"
              placeholder="Nombre"
              onChange={(e) => handledOnChange(e)}
            />
          </div>


          <div className="form-group">
            <label>Apellido: </label>
            <input
              required
              type="text"
              className="form-control"
              name="apellido"
              aria-describedby="apellido"
              placeholder="apellido"
              onChange={(e) => handledOnChange(e)}
            />
          </div>          

        </div>
        <button className="btn btn-primary btn-sm m-2">Registrar</button>
      </form>
    </div>
  );
};

export default InsertPeople;