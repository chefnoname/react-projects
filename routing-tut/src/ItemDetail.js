import { useEffect, useState } from "react";

const ItemDetail = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item);
    // console.log(item);
  };
  console.log(item.data);

  const itemName = item.data.item.name;
  return (
    <div>
      <h1>{itemName}</h1>
    </div>
  );
};

export default ItemDetail;
