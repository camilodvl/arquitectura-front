import { useParams } from "react-router-dom";
import { postPeople, getPeople } from "../services/PeopleService";
import { React, useState, useEffect } from "react";

const UpdatePeople = () => {
  const { id = "" } = useParams();

  return (
    <div>
      <form
        //onSubmit={(e) => handledSubmit(e)}
        className="m-3 border border-primary p-1 rounded border-opacity-25"
      >

        
        <div className="d-flex justify-content-around">

        <div className="form-group">
            <h1>Id: {id}</h1> 
          </div>


          <div className="form-group">
            <label>Nombre: </label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              aria-describedby="nombre"
              placeholder="Nombre"
              value="Nuevo camilo"
              //onChange={(e) => handledOnChange(e)}
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
              value="Ramirez"
              //onChange={(e) => handledOnChange(e)}
            />
          </div>          

        </div>
        <button className="btn btn-primary btn-sm m-2">Registrar</button>
      </form>
    </div>
  );
};

export default UpdatePeople;
