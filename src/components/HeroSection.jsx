import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const HeroSection = () => (
  <section className="relative h-screen max-h-[450px] overflow-hidden">
    <div className="absolute inset-0 flex">
      {['car1.webp', 'car2.webp', 'car3.png'].map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(/images/${image})` }}
        />
      ))}
    </div>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto px-4 h-full flex items-center relative z-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Discover Your <span className="text-blue-400">Dream Car</span>
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Explore our premium collection of luxury and performance vehicles
        </p>
        <div className="flex flex-wrap gap-4">
          <Button type="primary" size="large" className="bg-blue-600 hover:bg-blue-700">
            Browse Inventory <ArrowRightOutlined />
          </Button>
          <Button size="large" className="text-white border-white hover:bg-white hover:bg-opacity-10">
            Book a Test Drive
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
