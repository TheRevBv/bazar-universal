import { useState, useEffect, useCallback } from "react";
import ProductoCard from "@components/ProductoCard";

const ProductosList = ({ productos }) => {
  return (
    <>
      <div className="productos-list">
        {productos.map((producto) => (
          <ProductoCard key={producto._id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ProductosList;
