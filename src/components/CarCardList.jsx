import React from 'react';
import CarCard from './CarCard';

const carData = [
  {
    name: 'Toyota Camry',
    image: '/images/car1.webp',
    pricePerDay: 55,
    type: 'Sedan',
    seats: 5,
    transmission: 'Automatic'
  },
  {
    name: 'Honda Civic',
    image: '/images/car2.webp',
    pricePerDay: 50,
    type: 'Sedan',
    seats: 5,
    transmission: 'Manual'
  },
  {
    name: 'Tesla Model Y',
    image: '/images/car3.png',
    pricePerDay: 95,
    type: 'SUV',
    seats: 5,
    transmission: 'Automatic'
  }
];

const CarCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {carData.map((car, index) => (
        <CarCard key={index} {...car} />
      ))}
    </div>
  );
};

export default CarCardList;
