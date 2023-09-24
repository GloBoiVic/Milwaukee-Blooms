function Hero() {
  return (
    <section className="relative w-full h-[91vh] bg-center bg-no-repeat bg-cover bg-hero overflow-hidden">
      <div className="absolute inset-0 backdrop-brightness-75"></div>
      <div className="flex items-center min-h-full px-4 mx-auto max-screen-xl lg:justify-center sm:px-6 lg:px-8">
        <div className="z-10 text-center text-slate-50">
          <h1 className="text-5xl font-extrabold md:text-6xl text-orange">The Millenium Florist</h1>
          <p className="mt-4 text-xl/relaxed md:text-2xl">Timeless designs for any occasion</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
