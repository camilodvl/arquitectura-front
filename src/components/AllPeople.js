import { deletePeople, getPeople } from "../services/PeopleService";
import {React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function AllPeople() {
  const [people, setPeople] = useState([]);

  const listPeople = async () =>{
    const resp = await getPeople();
    setPeople(resp.data)
  }

  useEffect(() => {
    listPeople();
  }, []);
  
  return (
    <div>
      <table className="table m-2 mt-5">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {people.map((people) => {
            return (
              <tr key={people._id}>
                <th>{people._id}</th>
                <td>{people.name}</td>
                <td>{people.apellido}</td>
                <td>
                  <button
                    onClick={(e) => {
                      deletePeople(people._id);
                      listPeople();
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <NavLink
                    to={`get/${people._id}`}
                    className="btn btn-info"
                  >
                    Editar
                  </NavLink>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  }
  
  export default AllPeople;
  