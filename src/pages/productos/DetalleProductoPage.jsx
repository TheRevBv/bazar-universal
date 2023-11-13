// Objetivo: Mostrar el detalle de un producto
import { useLoaderData } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { obtenerProductoPorId } from "@data/productos.service";

export const loader = async ({ params }) => {
  const producto = await obtenerProductoPorId(params.id);
  return producto;
};

const DetalleProductoPage = () => {
  const producto = useLoaderData();
  return (
    <div className="container mx-auto mt-4 p-10 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-1/2">
          <img
            className="w-full"
            src={producto.images[0]}
            alt={producto.title}
          />

          <div className="grid grid-cols-4 gap-4 mt-4">
            {producto.images.map((image) => (
              <img
                key={image}
                className="w-full h-20 object-cover"
                src={image}
                alt={producto.title}
              />
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-center">{producto.title}</h1>
          <p className="text-center text-gray-500">{producto.category}</p>
          <p className="text-cyan-700">{producto.description}</p>

          <div className="flex flex-col mt-4">
            <div className="container">
              <div className="flex flex-row items-center justify-between">
                <span className="text-xl font-bold text-gray-800">
                  ${producto.price}
                </span>
                <div className="flex flex-row items-center gap-4 text-yellow-500">
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
