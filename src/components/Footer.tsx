function Footer() {
  return (
    <>
      {/* Hello world */}
      <footer className="max-w-full mx-auto mt-20 text-gray-500 bg-white rounded-lg shadow">
        <div className="flex flex-col items-center justify-between px-4 py-6 ml-20 bg-white lg:flex-row md:px-8 sm:py-8 lg:py-12">
          <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Milwaukee Blooms</span>
          </a>
          <div className="mt-5">
            <li className="flex items-center" role="telephone">
              <span className="mr-2">
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
          <ul className="flex flex-wrap items-center mt-5 mb-6 text-sm font-medium text-gray-500 sm:mb-0">
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
        <hr className="w-full my-6 border-gray-400 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="#" className="hover:underline">
            Milwaukee Blooms
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
