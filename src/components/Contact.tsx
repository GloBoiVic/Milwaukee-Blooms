function Contact() {
  return (
    <section className="container bg-white h-[70vh] px-4 py-2 mx-auto lg:px-8 lg:py-4">
      <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 ">
          <h2 className="mb-4 text-2xl font-bold underline dark:text-slate-50">Contact Information</h2>
          <a className="flex items-center font-medium text-md" href="tel:(414)-967-9649">
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
            (414)967-9649
          </a>
          <h4 className="mt-1 font-bold text-md">Delivery Service Only ❗️</h4>
          <p className="max-w-[25ch]">Areas include: Milwaukee County and surrounding counties upon request</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="mb-4 text-2xl font-bold underline dark:text-slate-50">Hours of Operation</h2>
          <div className="">
            <p>
              <span className="font-bold">Monday:</span> 8am-5pm
            </p>
            <p>
              <span className="font-bold">Tuesday:</span> 8am-5pm
            </p>
            <p>
              <span className="font-bold">Wednesday:</span> 8am-5pm
            </p>
          </div>
          <div className="">
            <p>
              <span className="font-bold">Thursday:</span> 8am-5pm
            </p>
            <p>
              <span className="font-bold">Friday:</span> 8am-6pm
            </p>
            <p>
              <span className="font-bold">Saturday:</span> 9am-6pm
            </p>
            <p>
              <span className="font-bold">Sunday:</span> 9am-2pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
