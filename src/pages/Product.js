import React, { useEffect, useState } from "react";
export const Product = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    await fetch("https://sample-node-deployment-7u2d.onrender.com/productos")
      .then((res) => res.json())
      .then((response) => {
        // const Formatter = FormatoTable(response.message);
        setProductos(response.message);
      });
  };
  console.log(productos);
  return (
    <div className="row mt-4 m-4">
      {productos.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Estado</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((e, y) => (
                <tr>
                  <td>{y + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.qty}</td>
                  <td>{e.state === 1 ? "Habilitado" : "Baja"}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Baja</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="form-control"
                    />
                    <br/>
                    <input
                      type="text"
                      placeholder="Cantidad"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
};
