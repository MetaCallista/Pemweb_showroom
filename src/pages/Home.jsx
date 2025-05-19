import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import CarCardList from '../components/CarCardList';


const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <CarCardList />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
