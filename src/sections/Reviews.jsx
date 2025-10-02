// src/pages/Reviews.jsx

import { Link } from "react-router";
import AnimatedTextLines from "../components/AnimatedTextLines";

const Reviews = () => {
  return (
    <section id="reviews" className="bg-white text-black">
      {/* Header */}
      <div className="h-[80vh] sm:h-[90vh] relative flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/review-header.jpg"
          alt="Reviews Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Big Text */}
        <h1 className="text-6xl sm:text-[10rem] font-extrabold tracking-wide z-10">
          OUR REVIEWS
        </h1>

        {/* Foreground Transparent PNG */}
        {/* <img
          src="/images/review-header.jpg"
          alt="Review Hero"
          className="absolute inset-0 h-full w-auto mx-auto object-contain z-20 transition-transform duration-300 hover:scale-110"
        /> */}
      </div>

      {/* Reviews Section */}
      <div
        className="relative px-5 sm:px-20 py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/logo2.png')" }} // 🔹 replace with your background image
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-10 z-10">
          {/* Review Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 flex items-start gap-6">
            <img
              src="/images/home-gallery-1.jpg"
              alt="Sarah K"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#b67c35] mb-3">
                Sarah K.
              </h3>
              <p className="text-lg sm:text-xl italic leading-relaxed">
                "Absolutely stunning work! The visuals were breathtaking and the
                storytelling was captivating. Every single detail was handled
                with such precision and care, making the entire experience
                unforgettable. They understood our vision instantly and went
                above and beyond to create something magical."
              </p>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 flex items-start gap-6">
            <img
              src="/images/home-gallery-2.jpg"
              alt="Raj M"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#b67c35] mb-3">
                Raj M.
              </h3>
              <p className="text-lg sm:text-xl italic leading-relaxed">
                "Professional, innovative, and super easy to collaborate with.
                From the very first discussion, they brought fresh ideas that we
                hadn’t even considered. Their process is smooth, efficient, and
                transparent. I’d recommend them to anyone looking for quality
                and creativity combined."
              </p>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 flex items-start gap-6">
            <img
              src="/images/home-gallery-3.jpg"
              alt="Emily W"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#b67c35] mb-3">
                Emily W.
              </h3>
              <p className="text-lg sm:text-xl italic leading-relaxed">
                "They transformed our ideas into reality with such passion and
                creativity. Every step of the way, they kept us in the loop and
                ensured that the final product matched (and exceeded!) our
                expectations. A truly inspiring team to work with — 10/10
                experience."
              </p>
            </div>
          </div>

          {/* Review Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 flex items-start gap-6">
            <img
              src="/images/home-gallery-4.jpg"
              alt="Daniel R"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-md"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#b67c35] mb-3">
                Daniel R.
              </h3>
              <p className="text-lg sm:text-xl italic leading-relaxed">
                "The team went above and beyond to deliver excellence. The
                attention to detail and commitment to perfection were clear from
                day one. What impressed me most was their ability to adapt and
                add value at every stage of the project. Truly world-class
                quality — we couldn’t be happier."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Your Journey Section */}
      <div className="relative px-5 sm:px-20 py-24 bg-black text-white text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-[#E26796] mb-10">
          START YOUR JOURNEY
        </h2>

        {/* Cross Image Layout */}
        <div className="flex justify-center gap-5 flex-wrap">
          <img
            src="/images/home-gallery-1.jpg"
            alt="Inspiration"
            className="w-32 sm:w-40 h-40 object-cover rounded-xl shadow-lg rotate-[-8deg] hover:rotate-0 transition-transform"
          />
          <img
            src="/images/home-gallery-2.jpg"
            alt="Inspiration"
            className="w-32 sm:w-40 h-40 object-cover rounded-xl shadow-lg rotate-[6deg] hover:rotate-0 transition-transform"
          />
          <img
            src="/images/home-gallery-3.jpg"
            alt="Inspiration"
            className="w-32 sm:w-40 h-40 object-cover rounded-xl shadow-lg rotate-[-5deg] hover:rotate-0 transition-transform"
          />
          <img
            src="/images/home-gallery-4.jpg"
            alt="Inspiration"
            className="w-32 sm:w-40 h-40 object-cover rounded-xl shadow-lg rotate-[7deg] hover:rotate-0 transition-transform"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link
            to="/contact"
            className="bg-[#b67c35] text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer Style Block */}
      <div className="bg-[#D9D9D9] py-16 px-5 sm:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-4xl font-bold text-[#b67c35] mb-6">
            Let’s Create Something Beautiful Together
          </h3>
          <p className="text-lg sm:text-xl">
            Join our growing list of happy clients who trusted us with their
            stories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
