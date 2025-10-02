import { Link } from "react-router";
import AnimatedTextLines from "../components/AnimatedTextLines";

const About = () => {
  const futureText1 =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam numquam officia ducimus odit blanditiis voluptatibus accusantium, veniam debitis dignissimos minima asperiores molestiae harum aspernatur doloribus dicta aliquam nesciunt dolor. Sed. Quam doloremque repr";

  return (
    <section id="about">
      <section
        id="hero"
        className="relative h-[90vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center"
      >
        <div className=" flex md:text-[180px] lg:text-[240px] xl:text-[300px] gap-5 tracking-wider">
          <span className="text-primary">About</span>
          <span className="text-paper">Us</span>
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/about-hero.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
          />
        </div>
      </section>
      <section className="about-us-intro relative bg-paper min-h-screen py-10 px-5 sm:px-10">
        {/* Top Half Part */}
        <div className="flex items-start gap-20">
          <div>
            <img
              src="/images/home-bento-6.jpg"
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
                <AnimatedTextLines text={futureText1} />
              </p>
              <Link
                to="/contact"
                className="bg-black text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Half Part */}
        <div className="flex flex-col md:flex-row items-end justify-end -mt-20">
          <div>
            <img
              src="/images/home-bento-5.jpg"
              alt="about us"
              className="w-[600px] max-w-[600px] h-[300px] object-cover object-center box-shadow shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="relative grid grid-cols-2 bg-black min-h-screen pl-5 sm:pl-10">
        <div className="z-10 flex items-center justify-center w-full text-right">
          <div className="flex flex-col items-end gap-7">
            <p className="text-3xl sm:text-5xl text-primary">
              <AnimatedTextLines text="Our Community" />
            </p>
            <p className="text-xl sm:text-xl text-white max-w-lg text-pretty font-serif">
              <AnimatedTextLines text={futureText1} />
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/images/home-bento-9.jpg"
            alt="about us"
            className="w-full h-[500px] object-cover object-center box-shadow shadow-xl"
          />
        </div>
      </section>

      {/* Our Community */}
      <section className="relative bg-paper min-h-screen flex items-center px-5 sm:px-30">
        <img
          src="/images/home-bento-5.jpg"
          alt=""
          className="absolute inset-0 object-cover object-center"
        />
        <div className="z-10 flex justify-end w-full text-right">
          <div className="flex flex-col items-end gap-7">
            <p className="text-3xl sm:text-5xl text-primary">
              <AnimatedTextLines text="Our Community" />
            </p>
            <p className="text-xl sm:text-xl text-white max-w-lg text-pretty font-serif">
              <AnimatedTextLines text={futureText1} />
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Member */}
      <section className="relative grid grid-cols-2 bg-white min-h-screen px-5 sm:px-10">
        <div className="z-10 flex items-center justify-center w-full text-right">
          <div className="flex flex-col items-end gap-7">
            <p className="text-3xl sm:text-5xl text-primary">
              <AnimatedTextLines text="Be a Member" />
            </p>
            <p className="text-xl sm:text-xl text-black max-w-lg text-pretty font-serif">
              <AnimatedTextLines text={futureText1} />
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center p-10">
          <img
            src="/images/home-bento-2.jpg"
            alt="about us"
            className="w-[80%] max-h-[90vh] object-cover object-center box-shadow shadow-xl"
          />
        </div>
      </section>
      <section className="relative bg-black min-h-screen px-5 sm:px-10 py-5 sm:py-10">
        <div className="text-3xl sm:text-5xl text-primary text-center my-10">
          Our Achivements
        </div>
        <div className="flex flex-col md:flex-row mb-5">
          <img
            src="/images/about-1.jpeg"
            alt="about-1"
            className="w-1/2 object-center object-cover"
          />
          <img
            src="/images/about-2.jpeg"
            alt="about-2"
            className="w-1/2 object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-5">
          <img
            src="/images/about-3.jpg"
            alt="about-3"
            className="w-1/2 object-center object-cover"
          />
          <img
            src="/images/about-4.jpg"
            alt="about-4"
            className="w-1/2 object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-5">
          <img
            src="/images/about-5.jpg"
            alt="about-5"
            className="w-1/2 object-center object-cover"
          />
          <img
            src="/images/about-6.jpg"
            alt="about-6"
            className="w-1/2 object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-5">
          <img
            src="/images/about-7.jpg"
            alt="about-7"
            className="w-1/2 object-center object-cover"
          />
          <img
            src="/images/about-8.jpg"
            alt="about-8"
            className="w-1/2 object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-5">
          <img
            src="/images/about-9.jpg"
            alt="about-9"
            className="w-1/2 object-center object-cover"
          />
          <img
            src="/images/about-10.jpg"
            alt="about-10"
            className="w-1/2 object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row mb-5">
          <img
            src="/images/about-11.jpg"
            alt="about-11"
            className="w-1/2 object-center object-cover"
          />
          <img
            src="/images/about-12.jpg"
            alt="about-12"
            className="w-1/2 object-center object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <img
            src="/images/about-16.jpeg"
            alt="about-16"
            className="w-2/4 object-center object-cover"
          />
          <img
            src="/images/about-13.jpeg"
            alt="about-13"
            className="w-1/4 object-center object-cover"
          />
          <img
            src="/images/about-15.jpeg"
            alt="about-15"
            className="w-1/4 object-center object-cover"
          />
        </div>
      </section>
    </section>
  );
};

export default About;
