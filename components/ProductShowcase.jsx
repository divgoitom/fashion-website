"use client";

import React from "react";
import { ProductCard } from "./ProductCard";

export function ProductShowcase() {
  const handleButtonClick = (productName) => {
    alert(`Clicked on ${productName}`);
  };

  const products = [
    {
      imageUrl:
        "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Delta Shoes",
      description: "Stylish and convenient shoes for everyday wear.",
      price: "79.99",
      buttonText: "Buy Now",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Soft T-shirts",
      description: "Comfortable Cotton T-shirts.",
      price: "29.99",
      buttonText: "View More",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/9219058/pexels-photo-9219058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Autumn Hoodies",
      description: "The ultimate in comfort and support.",
      price: "49.99",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center"></h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            buttonText={product.buttonText}
            onButtonClick={() => handleButtonClick(product.title)}
          />
        ))}
      </div>
    </div>
  );
}
