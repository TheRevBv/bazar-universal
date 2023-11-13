import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductoCard = ({ producto }) => {
  const { _id, title: nombre, price: precio, thumbnail: imagen } = producto;

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="card-body">
        <span className="card-title">{nombre}</span>
        <p>Precio: {precio}</p>
      </div>
      <div className="card-actions">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            navigate(`/producto/${_id}`);
          }}
        >
          Ver Producto
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;
