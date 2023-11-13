const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append(
  "Access-Control-Allow-Origin",
  `${import.meta.env.VITE_API_URL}`
);

//Obtener todos los productos
//Con parametros search, page y limit
export const obtenerProductos = async (search = "", page = 1, limit = 10) => {
  try {
    const resultado = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/productos?search=${search}&page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers,
      }
    );
    const data = await resultado.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Obtener un producto por su id
export const obtenerProductoPorId = async (id) => {
  try {
    const resultado = await fetch(
      `${import.meta.env.VITE_API_URL}/productos/${id}`,
      {
        method: "GET",
        headers,
      }
    );
    const data = await resultado.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
