import { Card } from 'antd';

const CarCard = ({ car }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={car.name} src={car.image} />}
    >
      <h3 className="text-lg font-semibold">{car.name}</h3>
      <p>Harga: Rp{car.price}</p>
      <p>Tahun: {car.year}</p>
    </Card>
  );
};

export default CarCard;
