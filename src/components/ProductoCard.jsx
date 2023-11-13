import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ProductoCard = ({ producto }) => {
  const { _id, title: nombre, price: precio, thumbnail: imagen } = producto;

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <span className="card-title">{nombre}</span>
          <p>{producto.category}</p>
        </div>
        <small className="card-subtitle text-muted">
          {producto.description}
        </small>
        <p className="card-text my-2">Precio: ${precio}</p>
        <div className="flex flex-row items-center gap-4">
          {Array.from(Array(5), (e, i) => {
            if (i + 1 <= producto.rating) {
              return <FaStar key={i} />;
            } else if (i + 0.5 <= producto.rating) {
              return <FaStarHalf key={i} />;
            } else {
              return <FaStar key={i} />;
            }
          })}
        </div>
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
