import { Card, Divider } from 'antd';
import { ThunderboltOutlined, SafetyOutlined, StarOutlined } from '@ant-design/icons';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose AutoElite</h2>
          <Divider className="max-w-xs mx-auto">Premium Experience</Divider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hoverable className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThunderboltOutlined className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast Delivery</h3>
            <p className="text-gray-600">
              Get your dream car delivered to your doorstep within 72 hours of purchase.
            </p>
          </Card>

          <Card hoverable className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafetyOutlined className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">Certified Quality</h3>
            <p className="text-gray-600">
              All vehicles undergo a 150-point inspection by certified technicians.
            </p>
          </Card>

          <Card hoverable className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <StarOutlined className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2">VIP Treatment</h3>
            <p className="text-gray-600">
              Exclusive benefits including free maintenance for the first year.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
