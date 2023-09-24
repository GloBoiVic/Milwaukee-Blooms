function About() {
  return (
    <section className="bg-stone-100 ">
      <div className="container mx-auto">
        <div className="flex flex-col mb-10 md:mb-20">
          <h1 className="mb-2 text-lg font-semibold text-purple-500 ">About Us</h1>
          <h2 className="pb-2 text-2xl font-bold text-slate-800 md:text-4xl ">
            Milwaukee's Top Flower Delivery Service
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mb-14">
            <div className="flex-1 h-2 bg-purple-200"></div>
            <div className="flex-1 h-2 bg-purple-400"></div>
            <div className="flex-1 h-2 bg-purple-300"></div>
          </div>
        </div>
        <div className="w-3/4 md:w-2/4 ">
          <p className="mb-4 text-gray-500 ">
            Welcome to Milwaukee Blooms, your premier destination for exquisite floral arrangements delivered straight
            to your doorstep. With years of experience in the industry, we are dedicated to creating breathtaking
            designs that add beauty and joy to every occasion. Our skilled team of floral enthusiasts meticulously
            crafts each arrangement, sourcing only the finest, freshest blooms from trusted growers and suppliers. From
            classic and timeless designs to modern and avant-garde styles, our diverse range caters to every taste.
          </p>
          <p className="text-gray-500 ">
            At Milwaukee Blooms, we believe that flowers have the power to express emotions, tell stories, and create
            lasting memories. Each arrangement we create is a work of art, designed to captivate and enchant. With our
            attention to detail and a deep understanding of the language of flowers, we ensure that every bouquet
            conveys your sentiments perfectly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
