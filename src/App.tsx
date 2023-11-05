import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="relative max-w-full min-h-screen leading-loose text-gray-950 dark:text-stone-50 bg-stone-50 dark:bg-gray-950">
      <NavBar />
      <Hero />
      <Contact />
      <About />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
