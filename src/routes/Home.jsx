import IntroSection from '../components/IntroSection';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUsSection';
import Sponsors from '../components/SponsorsSection';
import ValuesSection from '../components/ValuesSection';
import Location from '../components/LocationSection';

export default function Home() {
  return (
    <main>
      <IntroSection />
      <ServicesSection />
      <WhyUs />
      <ValuesSection />
      <Sponsors />
      <Location />
    </main>
  )
}
