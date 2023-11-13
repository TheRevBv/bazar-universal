import "@styles/home.css";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, Link, Outlet, Navigate } from "react-router-dom";
import ProductosList from "@components/ProductosList";
import SearchInput from "@components/SearchInput";
import Paginator from "@components/Paginator";

const HomePage = () => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append(
    "Access-Control-Allow-Origin",
    `${import.meta.env.VITE_API_URL}`
  );
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [btnSearch, setBtnSearch] = useState(true);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const regApi = useCallback(async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/productos/?page=${page}&search=${search}&limit=10`,
        {
          method: "GET",
          headers,
        }
      );
      if (!response.ok) {
        throw new Error(`Error en la llamada a la API ${response.statusText}`);
      }
      const data = await response.json();
      // console.log(data);
      const { productos, totalPages: pages, total } = data;
      setProductos(productos);
      setPages(pages);
      setError(false);
      setTotal(total);
    } catch (error) {
      console.log(error);
      setTimeout(() => {
        handleSearchError();
      }, 2000);
      setError(true);
    }
  }, [page, search, setProductos]);

  const handleSearchError = () => {
    setSearch("");
    setPage(1);
    setError(false);
  };

  const handleSearch = () => {
    setBtnSearch(false);
    setPage(1);
  };

  useEffect(() => {
    if (btnSearch === false) {
      regApi();
    }
  }, [btnSearch, regApi, error]);

  return (
    <div className="home">
      <img src="/assets/bolsa.png" alt="logo" className="w-32 mx-auto" />
      <h1 className="text-4xl font-bold text-center my-4">Bazar Online</h1>
      <div className="flex flex-col md:flex-row gap-4 w-8/12 mx-auto items-center">
        <SearchInput search={search} setSearch={setSearch} />
        <button
          className={`bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            btnSearch ? "block" : "hidden"
          }`}
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p className="font-bold">Error</p>
          <p>Hubo un error en la busqueda</p>
        </div>
      )}
      {productos.length === 0 && !error && !btnSearch && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
          <p className="font-bold">No hay productos</p>
          <p>No se encontraron productos</p>
        </div>
      )}
      {productos.length > 0 && (
        <>
          <p className="text-center my-4 text-gray-700 font-bold">
            Mostrando {productos.length} de {total} productos
          </p>
          <ProductosList productos={productos} />
          <Paginator page={page} pages={pages} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default HomePage;
