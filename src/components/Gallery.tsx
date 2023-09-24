function Gallery() {
  return (
    <section className="px-4 py-2 mx-auto lg:px-8 lg:py-4">
      {/*<!-- Component: Six columns even layout --> */}
      <div className="flex flex-col px-6 py-6 bg-white md:items-center sm:py-8 lg:py-12">
        <div className="mb-4 text-center sm:mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-purple-500 lg:text-3xl">Gallery</h2>
        </div>
        <div className="grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
          <div>
            <img className="object-cover h-auto rounded-sm aspect-square" src="/mkeblooms/flowers-1.jpg" alt="" />
          </div>
          <div>
            <img className="object-cover h-auto rounded-sm aspect-square" src="/mkeblooms/flowers-2.jpg" alt="" />
          </div>
          <div>
            <img className="object-cover h-auto rounded-sm aspect-square" src="/mkeblooms/flowers-3.jpg" alt="" />
          </div>
          <div>
            <img className="object-cover h-auto rounded-sm aspect-square" src="/mkeblooms/flowers-4.jpg" alt="" />
          </div>
          <div>
            <img className="object-cover h-auto rounded-sm aspect-square" src="/mkeblooms/flowers-5.jpg" alt="" />
          </div>
          <div>
            <img className="object-cover h-auto rounded-sm aspect-square" src="/mkeblooms/flowers-6.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
