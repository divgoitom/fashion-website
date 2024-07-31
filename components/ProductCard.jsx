"use client";

import React from "react";

export function ProductCard({
  imageUrl,
  title,
  description,
  price,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left text-white">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <p className="mt-2 text-lg font-bold">${price}</p>
        <button
          onClick={onButtonClick}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded py-1 px-3"
        >
          {buttonText} &rarr;
        </button>
      </div>
    </div>
  );
}
