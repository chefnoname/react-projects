import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const items = await data.json();
    console.log(items.data);

    setItems(items.data);
  };

  //   console.log(items[1].itemId);

  const h1Style = {
    // textDecoration: "none",
    color: "black",
  };

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link style={h1Style} to={`/shop/${item.itemId}`}>
            {item.item.name}
          </Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
