import React from 'react';

const CarCard = ({ name, image, pricePerDay, type, seats, transmission }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white p-4 hover:shadow-xl transition-shadow">
      <img className="w-full h-48 object-cover rounded-xl" src={image} alt={name} />
      <div className="px-2 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">Type: {type}</p>
        <p className="text-sm text-gray-600">Seats: {seats} | Transmission: {transmission}</p>
        <p className="mt-3 text-lg font-bold text-indigo-600">${pricePerDay}/day</p>
      </div>
    </div>
  );
};

export default CarCard;
