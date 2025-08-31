const Home = () => {
  return (
    <section id="home">
      {/* Hero Section */}
      <div className="hero h-[90vh] sm:h-screen relative flex flex-col items-center justify-center text-white px-5 sm:px-10">
        <img
          src="/images/home-hero.jpg"
          alt="Ahuja's Production"
          className="absolute h-full w-full object-cover object-center -z-10"
        />
        <div className="absolute text-white/90 top-0 sm:top-0 left-0 m-5 sm:m-10 text-6xl sm:text-[150px] font-bold">
          Ahuja's
        </div>
        <div className="absolute text-[#e29231cd] bottom-10 sm:bottom-0 right-0 m-5 sm:m-10 text-6xl sm:text-[150px] font-bold">
          Production
        </div>
      </div>

      {/*About Modelling Section */}
      <div className="Modelling min-h-screen bg-[#D9D9D9] flex flex-col justify-center px-5 sm:px-10 gap-15 py-20 ">
        <h1 className="text-[#b67c35] text-5xl sm:text-9xl">Modelling</h1>
        <div className="flex flex-col gap-7 px-2">
          <p className="text-4xl sm:text-5xl">What is Modelling?</p>
          <p className="text-xl sm:text-4xl max-w-[90%] text-pretty">
            Modelling is more than just striking a pose, it's the art of
            presence, confidence, and storytelling through movement. At Ahuja's
            Production, we believe every model carries not just a look, but a
            legacy. From the subtle power of a glance to the commanding energy
            of a runway stride, modelling transforms individuals into icons who
            define culture and inspire generations.
          </p>
        </div>
        <div className="flex flex-col gap-7 px-2">
          <p className="text-xl sm:text-4xl max-w-[90%] text-pretty">
            Our approach is rooted in precision and passion. We craft
            experiences that highlight individuality while aligning with the
            evolving demands of the fashion and entertainment world. Whether
            it's high-fashion editorials, commercial campaigns, or artistic
            showcases, we build platforms where talent doesn't just fit in, it
            stands out. Modelling, in our vision, is not about fitting a mold,
            but breaking it with bold authenticity.
          </p>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="flex flex-col sm:flex-row min-h-screen items-center justify-center px-5 sm:px-10 gap-1 sm:gap-2 pt-50 pb-70 bg-black overflow-x-hidden">
        <img
          src="/images/home-gallery-1.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-[#D9D9D9] translate-y-0"
        />
        <img
          src="/images/home-gallery-2.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-[#D9D9D9] -translate-x-6 sm:translate-y-20 -rotate-12 z-10"
        />
        <img
          src="/images/home-gallery-3.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-[#D9D9D9] sm:-translate-y-10"
        />
        <img
          src="/images/home-gallery-4.jpg"
          alt=""
          className="max-w-[200px] sm:max-w-[300px] w-full object-cover object-center border-[10px] border-[#D9D9D9] rotate-12 sm:rotate-0 sm:translate-y-20"
        />
      </div>

      {/*Future Section */}
      <div className="Modelling min-h-screen flex flex-col sm:flex-row justify-between px-5 sm:px-10 gap-15 py-30 ">
        <div className="h-full w-full flex flex-col justify-center gap-15   ">
          <h1 className="text-primary text-5xl sm:text-9xl">Future</h1>
          <div className="flex flex-col gap-7 px-2">
            <p className="text-4xl sm:text-5xl">What is the Future of Modelling?</p>
            <p className="text-xl sm:text-4xl w-full text-pretty">
              Modelling is no longer just a pose—it's presence, confidence, and
              the art of telling stories without words. At Ahuja's Production we
              believe every model carries more than a look— they carry a legacy.
            </p>
          </div>
          <div className="flex flex-col gap-7 px-2">
            <p className="text-xl sm:text-4xl w-full text-pretty">
              What does the future demand—fitting in, or standing apart? For us,
              the answer is clear: we don't follow trends, we define them.
              Modelling isn't about moulds. It's about breaking them with bold
              authenticity.
            </p>
          </div>
        </div>
        <img
          src="/images/home-future.jpg"
          alt=""
          className="w-full sm:max-w-1/3 h-full rounded-tr-full rounded-bl-full"
        />
      </div>

      {/* Bento Grid */}

      <div className="flex h-[50vh] sm:h-screen items-center justify-center px-5 sm:px-10 gap-2 my-0 sm:my-20 bg-white py-10 relative">
        <div className="absolute font-semibold inset-0 flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center justify-between leading-none max-w-[90%] h-full max-h-[85%] text-white/90 text-6xl sm:text-[120px] tracking-widest text-center">
            <div>Step Into the</div>
            <div className="font-galada text-secondary/90 font-light"> Future </div>
            <div>of</div>
            <div className="font-galada text-secondary font-light">Modelling</div>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-3 h-full w-full">
          <img
            src="/images/home-bento-1.jpg"
            alt=""
            className="col-span-1 row-span-2 rounded-lg shadow-md h-full w-full object-cover object-center"
          />

          <img
            src="/images/home-bento-2.jpg"
            alt=""
            className="col-span-1 row-span-1 rounded-lg shadow-md h-full w-full object-cover object-[center_20%]"
          />

          <img
            src="/images/home-bento-3.jpg"
            alt=""
            className="col-span-1 row-span-1  rounded-lg shadow-md h-full w-full object-cover object-[center_30%]"
          />

          <img
            src="/images/home-bento-4.jpg"
            alt=""
            className="col-span-1 row-span-2  rounded-lg shadow-md h-full w-full object-cover object-[center_0%]"
          />

          <img
            src="/images/home-bento-5.jpg"
            alt=""
            className="col-span-2 row-span-2  rounded-lg shadow-md h-full w-full object-cover object-center"
          />

          <img
            src="/images/home-bento-6.jpg"
            alt=""
            className="col-span-1 row-span-2 rounded-lg shadow-md h-full w-full object-cover object-[center_10%] "
          />

          <img
            src="/images/home-bento-7.jpg"
            alt=""
            className="col-span-1 row-span-1  rounded-lg shadow-md h-full w-full object-cover object-[center_30%]"
          />

          <img
            src="/images/home-bento-8.jpg"
            alt=""
            className="col-span-1 row-span-1 rounded-lg shadow-md h-full w-full object-cover object-[center_30%]"
          />

          <img
            src="/images/home-bento-9.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover object-[center_30%] col-span-2 row-span-1 shadow-md"
          />
        </div>
      </div>

      {/* Join Us Card */}
      <div className="flex justify-center items-center h-[200px] sm:min-h-screen px-5 sm:px-10 my-30 sm:my-50 py-0 sm:py-10">
        <div className="flex gap-7 relative w-full h-full">
          <div className="flex flex-col gap-10 justify-center items-left w-full h-full z-10 text-white px-5 sm:px-10 py-10">
            <div className="flex flex-col gap-5">
              <div className="text-2xl sm:text-5xl font-bold">Become a Star</div>
              <div className="hidden sm:block text-2xl font-semibold w-full max-w-1/2 text-white/90">
                Discover opportunities, showcase your talent, and connect with a
                network that values authenticity and ambition. This is where
                modelling careers begin and grow.
              </div>
            </div>
            <div className="bg-white text-black font-bold px-0 sm:px-5 py-2 sm:py-3 rounded-2xl max-w-[120px] sm:max-w-[200px] text-center text-xl sm:text-xl cursor-pointer">
              Join Us
            </div>
          </div>

          <img
            src="/images/home-join-card.jpg"
            alt=""
            className="rounded-3xl absolute inset-0 w-full h-full object-cover object-[0%_20%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
