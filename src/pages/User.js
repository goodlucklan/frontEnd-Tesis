import React, { useEffect, useState } from "react";

export const User = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    await fetch("https://sample-node-deployment-7u2d.onrender.com/usuarios")
      .then((res) => res.json())
      .then((response) => {
        setUsuarios(response.message);
      });
  };
  return (
    <div className="row mt-4 m-4">
      <ul className="list-group">
        {usuarios.length > 0 ? (
          usuarios.map((x) => (
            <li className="list-group-item">
              {x.first_name}
              {x.last_name} - {x.email}
            </li>
          ))
        ) : (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </ul>
    </div>
  );
};
