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

  const navigate = useNavigate();

  const regApi = useCallback(async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/productos/?page=${page}&title=${search}`,
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
      const { productos, totalPages: pages } = data;
      setProductos(productos);
      setPages(pages);
      setError(false);
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

  useEffect(() => {
    regApi();
  }, [regApi, error]);

  return (
    <div className="home">
      <h1 className="text-4xl font-bold text-center my-4">Productos</h1>
      <SearchInput search={search} setSearch={setSearch} />
      <ProductosList productos={productos} />
      <Paginator page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

export default HomePage;
