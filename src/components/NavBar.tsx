import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState, useEffect } from 'react';

const navLinks = [
  {
    title: 'Home',
    href: '/home',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Gallery',
    href: '/gallery',
  },

  {
    title: 'Reviews',
    href: '/review',
  },
];

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLinks.map((link, id) => (
        <li className="p-1 font-normal" key={id}>
          <a href={link.href} className="flex items-center">
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <nav className="px-4 py-2 lg:px-8 lg:py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-xl tracking-tight font-semi-bold scroll-m-20 lg:text-3xl">Milwaukee Blooms</h1>
          <div className="hidden lg:block">{navList}</div>
          {openNav ? (
            <Cross1Icon
              className="w-6 h-6 ml-auto cursor-pointer text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            />
          ) : (
            <HamburgerMenuIcon
              className="w-6 h-6 ml-auto cursor-pointer text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            />
          )}
        </div>
        {openNav && (
          <div>
            <div className="container mx-auto">{navList}</div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
