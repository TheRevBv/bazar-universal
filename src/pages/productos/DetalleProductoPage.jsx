// Objetivo: Mostrar el detalle de un producto
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";

export const loader = async ({ params }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/productos/${params.id}`
  );
  if (!response.ok) {
    throw new Error(`Error en la llamada a la API ${response.statusText}`);
  }
  const producto = await response.json();
  console.log(producto);
  return producto;
};

const DetalleProductoPage = () => {
  const producto = useLoaderData();
  return (
    <div className="container mx-auto mt-4 p-10 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <img
            className="w-full"
            src={producto.images[0]}
            alt={producto.title}
          />

          <div className="flex flex-row mt-4 gap-4">
            {producto.images.map((image) => (
              <img
                key={image}
                className="w-1/4"
                src={image}
                alt={producto.title}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold">{producto.title}</h1>
          <p className="text-cyan-700">{producto.description}</p>

          <div className="flex flex-col mt-4">
            <div className="container">
              <div className="flex flex-row items-center gap-4">
                <p className="text-gray-500 text-2xl">Price</p>
                <span className="text-2xl font-bold text-gray-800">
                  ${producto.price}
                </span>
              </div>
              <div className="flex flex-row items-center gap-4">
                <p className="text-gray-500 text-2xl">Discount</p>
                <span className="text-2xl font-bold text-gray-800">
                  {producto.discountPercentage}%
                </span>
              </div>
              {/* Mostrar rating con iconos de estrellas de forma dinamica */}
              <div className="flex flex-row items-center gap-4">
                <p className="text-gray-500 text-2xl">Rating</p>
                <span className="text-2xl font-bold text-gray-800">
                  {producto.rating}
                </span>
                <div className="flex flex-row items-center gap-4">
                  {Array.from(Array(5), (e, i) => {
                    if (i + 1 <= producto.rating) {
                      return <FaStar key={i} />;
                    } else if (i - 0.5 <= producto.rating) {
                      return <FaStarHalf key={i} />;
                    } else {
                      return <FaStar key={i} />;
                    }
                  })}
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <p className="text-gray-500 text-2xl">Stock</p>
                <span className="text-2xl font-bold text-gray-800">
                  {producto.stock}
                </span>
              </div>
            </div>
            <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetalleProductoPage;
