import { Link } from "react-router";
import AnimatedTextLines from "../components/AnimatedTextLines";

const About = () => {
  const textOurVision =
    "At Ahuja's Production, we aim to redefine modeling in Jaipur — creating a platform where talent meets opportunity and every model shines.";
  const textOurStory =
    "From humble beginnings in Jaipur, Ahuja's Production has grown into a hub for aspiring models, connecting creativity, professionalism, and passion in every project.";
  const textOurCommunity =
    "We celebrate diversity, collaboration, and talent. Our community brings together models, photographers, and creatives to inspire, learn, and grow together.";
  const textBeAMember =
    "Join Ahuja's Production today! Step into a world of opportunities, exclusive events, and professional growth tailored for every aspiring model.";

  return (
    <section id="about">
      <section
        id="hero"
        className="relative h-[50vh] sm:h-[40vh] lg:h-[90vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center "
      >
        <div className="flex text-[80px] sm:text-[120px] md:text-[180px] lg:text-[240px] xl:text-[300px] gap-5 tracking-wider">
          <span className="text-primary">About</span>
          <span className="text-paper">Us</span>
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/about-hero.webp"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center  h-full"
          />
        </div>
      </section>

      {/* Our Vision */}
      <section className="about-us-intro relative bg-paper min-h-screen py-10 px-5 sm:px-10 flex flex-col gap-40 justify-center">
        {/* Top Half Part */}
        <div className="flex flex-col md:flex-row items-start gap-20">
          <div className="flex w-full md:w-auto items-center justify-center">
            <img
              src="/images/about-main-1.webp"
              alt="about us"
              className="max-w-[500px] h-[400px] object-cover object-center box-shadow shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-5 items-start justify-center">
            <div className="flex flex-col gap-7 px-2">
              <p className="text-3xl sm:text-5xl text-primary">
                <AnimatedTextLines text="Our Vision" />
              </p>
              <p className="text-xl sm:text-xl max-w-xl text-pretty font-serif">
                <AnimatedTextLines text={textOurVision} />
              </p>
              <Link
                to="/form"
                className="bg-black text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Half Part */}
        <div className="flex justify-center items-center md:flex-row md:items-end md:justify-end md:-mt-20">
          <div>
            <img
              src="/images/about-main-2.webp"
              alt="about us"
              className="md:w-[600px] md:max-w-[600px] h-[300px] object-cover object-center box-shadow shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-black min-h-screen px-5 md:pl-10 py-10">
        <div className="z-10 flex items-center justify-center w-full text-right md:px-10">
          <div className="flex flex-col items-end gap-7">
            <p className="text-3xl sm:text-5xl text-primary">
              <AnimatedTextLines text="Our Story" />
            </p>
            <p className="text-xl sm:text-xl text-white max-w-lg text-pretty font-serif">
              <AnimatedTextLines text={textOurStory} />
            </p>
            <Link
              to="/form"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/images/about-main-3.webp"
            alt="about us"
            className="w-full h-[500px] object-cover object-center box-shadow shadow-xl"
          />
        </div>
      </section>

      {/* Our Community */}
      <section className="relative bg-paper min-h-screen flex items-center px-5 sm:px-30">
        <img
          src="/images/about-main-4.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="z-10 flex justify-end w-full text-right">
          <div className="flex flex-col items-end gap-7">
            <p className="text-3xl sm:text-5xl text-primary">
              <AnimatedTextLines text="Our Community" />
            </p>
            <p className="text-xl sm:text-xl text-white max-w-lg text-pretty font-serif">
              <AnimatedTextLines text={textOurCommunity} />
            </p>
            <Link
              to="/form"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Member */}
      <section className="relative grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-white min-h-screen px-5 sm:px-10 py-10">
        <div className="z-10 flex items-center justify-center w-full text-right">
          <div className="flex flex-col items-end gap-7">
            <p className="text-3xl sm:text-5xl text-primary">
              <AnimatedTextLines text="Be a Member" />
            </p>
            <p className="text-xl sm:text-xl text-black max-w-lg text-pretty font-serif">
              <AnimatedTextLines text={textBeAMember} />
            </p>
            <Link
              to="/form"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center p-0 md:p-10">
          <img
            src="/images/home-bento-2.webp"
            alt="about us"
            className="w-full md:w-[80%] max-h-[90vh] object-cover object-center box-shadow shadow-xl"
          />
        </div>
      </section>

      {/* Our Achievements */}
      <section className="relative bg-black min-h-screen px-5 sm:px-10 py-5 sm:py-10">
        <div className="text-3xl sm:text-5xl text-primary text-center my-10">
          Our Achievements
        </div>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-1.webp"
            alt="about-1"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <img
            src="/images/about-2.webp"
            alt="about-2"
            className="w-full md:w-1/2 object-cover object-center"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-3.webp"
            alt="about-3"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <img
            src="/images/about-4.webp"
            alt="about-4"
            className="w-full md:w-1/2 object-cover object-center"
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-5.webp"
            alt="about-5"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <img
            src="/images/about-6.webp"
            alt="about-6"
            className="w-full md:w-1/2 object-cover object-center"
          />
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-7.jpg"
            alt="about-7"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <img
            src="/images/about-8.webp"
            alt="about-8"
            className="w-full md:w-1/2 object-cover object-center"
          />
        </div>

        {/* Row 5 */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-9.jpg"
            alt="about-9"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <img
            src="/images/about-10.jpg"
            alt="about-10"
            className="w-full md:w-1/2 object-cover object-center"
          />
        </div>

        {/* Row 6 */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-11.webp"
            alt="about-11"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <img
            src="/images/about-12.jpg"
            alt="about-12"
            className="w-full md:w-1/2 object-cover object-center"
          />
        </div>

        {/* Final Row (3 Images) */}
        <div className="flex flex-col md:flex-row md:mb-5">
          <img
            src="/images/about-16.webp"
            alt="about-16"
            className="w-full md:w-1/2 object-cover object-center"
          />
          <div className="flex flex-col md:flex-row w-full md:w-1/2">
            <img
              src="/images/about-13.webp"
              alt="about-13"
              className="w-full md:w-1/2 object-cover object-center"
            />
            <img
              src="/images/about-15.webp"
              alt="about-15"
              className="w-full md:w-1/2 object-cover object-center"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
