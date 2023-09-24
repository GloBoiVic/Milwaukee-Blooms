import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons';

function Reviews() {
  return (
    <section className="container ">
      <div className="flex flex-col items-center bg-white">
        <div className="px-4 py-6 md:px-8 sm:py-8 lg:py-12">
          <h2 className="text-4xl font-bold tracking-tight text-purple-500 sm:text-5xl">
            What our customers are saying
          </h2>
          {/* <p className="max-w-lg mt-6 leading-relaxed text-gray-700">See More</p> */}
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 py-6 mt-8 md:grid-cols-2 lg:grid-cols-3 md:px-8 sm:py-8 lg:py-1 ">
          <blockquote>
            <div className="flex">
              <StarFilledIcon width={20} height={20} color="#A855F7" />
              <StarFilledIcon width={20} height={20} color="#A855F7" />
              <StarFilledIcon width={20} height={20} color="#A855F7" />
              <StarFilledIcon width={20} height={20} color="#A855F7" />
              <StarIcon width={20} height={20} color="#A855F7" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-purple-600 sm:text-3xl">Blown Away!</p>
              <p className="mt-4 leading-relaxed text-gray-700">
                "I was absolutely blown away by the stunning floral arrangement I received from Milwaukee Blooms. The
                attention to detail and choice of flowers were impeccable. It truly brightened my day and added a touch
                of elegance to my home. I highly recommend their services to anyone looking for exquisite floral designs
                delivered with top-notch customer service."
              </p>
            </div>
            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">&mdash; Sarah W</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
