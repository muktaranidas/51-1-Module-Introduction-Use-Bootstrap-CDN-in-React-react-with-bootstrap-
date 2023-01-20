import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const products = [
    { id: 1, name: "Mac Book Pro", price: 1450000 },
    { id: 2, name: "Mac Book Crow", price: 1550000 },
    { id: 3, name: "Mac Book Grow", price: 1650000 },
    // { id: 3, name: "Mac Book Grow", price: 1650000 },
  ];
  return (
    <div className="card-group">
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CardGroup;
