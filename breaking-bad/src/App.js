import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterGrid from "./components/characters/CharacterGrid";
import Header from "./components/UI/Header";
import Search from "./components/UI/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsloading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
