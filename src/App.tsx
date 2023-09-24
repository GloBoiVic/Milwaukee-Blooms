import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

// type ColorSchemeType = {
//   theme: string;
//   // setTheme: Dispatch<SetStateAction<string>>;
// };

function App() {
  const [theme, setTheme] = useState<string>('light');

  // useEffect(() => {
  //   if (window.matchMedia('(prefers-color-scheme: dark').matches) {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, [theme, setTheme]);

  function handleThemeSwitch() {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }

  // const handleThemeSwitch = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  return (
    <div className="relative max-w-full min-h-screen leading-loose text-gray-950 dark:text-stone-50 bg-stone-50 dark:bg-gray-950">
      <NavBar />
      {theme === 'light' ? (
        <MoonIcon
          width={30}
          height={30}
          className="absolute top-7 right-[5rem] md:right-[50vh] cursor-pointer"
          onClick={handleThemeSwitch}
        />
      ) : (
        <SunIcon
          width={30}
          height={30}
          color="yellow"
          className="absolute top-7 right-[5rem] md:right-[50vh] cursor-pointer"
          onClick={handleThemeSwitch}
        />
      )}
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
