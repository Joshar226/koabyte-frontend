import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'
import DevelopmentSection from '../components/sections/DevelopmentSection'
import RepairsSection from '../components/sections/RepairsSection'
import ProcessSection from '../components/sections/ProcessSection'
import ContactSection from '../components/sections/ContactSection'

export default function HomeView() {
  return (
    <>
      <Helmet>
        <title>KoaByte | Desarrollo de software y reparación de equipos</title>
        <meta
          name="description"
          content="Creamos páginas web, apps móviles y aplicaciones de escritorio a la medida. También reparamos celulares, laptops y PCs con garantía."
        />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <DevelopmentSection />
        <RepairsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
