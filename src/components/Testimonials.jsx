import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const testimonials = [
  {
    quote: "The buying process was seamless and the car exceeded my expectations!",
    author: "Michael Johnson",
    rating: 5
  },
  {
    quote: "Best customer service I've ever experienced at a dealership.",
    author: "Sarah Williams",
    rating: 5
  },
  {
    quote: "Found my dream car at a price I could afford. Highly recommend!",
    author: "David Kim",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 h-full">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarOutlined
                    key={i}
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-500"}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-white">{testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
