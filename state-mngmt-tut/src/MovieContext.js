import { createContext, useState } from "react";

export const MovieCtx = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: "Shutter Island",
      price: "£15",
      id: 123444444,
    },
    {
      name: "Inception",
      price: "£10",
      id: 123445483,
    },
    {
      name: "Law Abiding Citizen",
      price: "£25",
      id: 123441234,
    },
  ]);

  return (
    <MovieCtx.Provider value={[movies, setMovies]}>
      {children}
    </MovieCtx.Provider>
  );
};
