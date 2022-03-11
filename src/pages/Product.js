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
        setProductos(response.message);
      });
  };
  console.log(productos);
  return (
    <div className="row mt-4 m-4">
      <ul className="list-group">
        {productos.length > 0
          ? productos.map((x) => <li className="list-group-item">{x.name}</li>)
          : "Loading"}
      </ul>
    </div>
  );
};
