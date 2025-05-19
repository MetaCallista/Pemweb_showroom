import { useEffect, useState } from 'react';
import { Statistic } from 'antd';
import { CheckCircleOutlined, CarOutlined, CalendarOutlined, DollarOutlined } from '@ant-design/icons';

const StatsSection = () => {
  const [stats, setStats] = useState([
    { value: 0, label: 'Happy Customers', suffix: '+', icon: <CheckCircleOutlined /> },
    { value: 0, label: 'Vehicles Sold', suffix: '+', icon: <CarOutlined /> },
    { value: 0, label: 'Years Experience', suffix: '+', icon: <CalendarOutlined /> },
    { value: 0, label: 'Savings Offered', suffix: '%', icon: <DollarOutlined /> }
  ]);

  useEffect(() => {
    const finalValues = [1250, 850, 15, 30];
    const duration = 2000;
    const increment = 20;

    const intervals = stats.map((_, i) => {
      let current = 0;
      const target = finalValues[i];
      const step = target / (duration / increment);

      return setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(intervals[i]);
        }

        setStats(prev => prev.map((stat, idx) =>
          idx === i ? { ...stat, value: Math.floor(current) } : stat
        ));
      }, increment);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <Statistic
                value={stat.value}
                suffix={stat.suffix}
                valueStyle={{ color: '#3b82f6', fontSize: '2.5rem' }}
                prefix={stat.icon}
              />
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
