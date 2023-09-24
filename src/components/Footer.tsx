function Footer() {
  return (
    <footer className="container px-4 py-2 mt-2 lg:px-8 lg:py-4">
      <div className="flex flex-col items-center justify-between px-4 py-6 lg:flex-row md:px-8 sm:py-8 lg:py-12">
        <h1 className="text-xl tracking-tight font-semi-bold scroll-m-20 lg:text-3xl ">Milwaukee Blooms</h1>
        <div className="">
          <li className="flex items-center" role="telephone">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <a role="menuitem" aria-haspopup="false" href="tel:(414)-967-9649">
              (414)967-9649
            </a>
          </li>
        </div>
        <ul className="flex flex-wrap items-center justify-center font-medium">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Reviews
            </a>
          </li>
        </ul>
      </div>
      <hr className="w-full mb-2 lg:mb-4" />
      <span className="block pb-5 text-sm sm:text-center dark:text-gray-400">
        © 2023{' '}
        <a href="#" className="hover:underline">
          Milwaukee Blooms
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
