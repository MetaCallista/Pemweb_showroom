import { Button } from 'antd';

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a test drive today and experience the AutoElite difference
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            type="default"
            size="large"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Book a Test Drive
          </Button>
          <Button
            type="primary"
            size="large"
            className="bg-transparent border-white hover:bg-white hover:text-blue-600"
          >
            Browse Inventory
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
