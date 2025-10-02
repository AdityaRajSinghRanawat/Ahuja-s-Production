import AnimatedTextLines from "../components/AnimatedTextLines";
import { Link } from "react-router";

const futureText1 =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam numquam officia ducimus odit blanditiis v";

const Models = () => {
  return (
    <section>
      {/* Male */}
      <section
        id="hero"
        className="relative h-[90vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center"
      >
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-center md:text-[180px] lg:text-[240px] xl:text-[300px] gap-5 tracking-widest">
            <span className="text-primary leading-none">MA</span>
            <span className="text-paper leading-none">LE</span>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center z-10">
            <div className="flex flex-col gap-7 px-2">
              <p className="text-xl text-white sm:text-xl max-w-md text-pretty font-serif">
                <AnimatedTextLines text={futureText1} />
              </p>
              <Link
                to="/forms"
                className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
          />
        </div>
      </section>

      {/* Female */}
      <section
        id="hero"
        className="relative min-h-screen w-full px-5 sm:px-10 font-magtis font-extrabold bg-paper flex items-center justify-center"
      >
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-center md:text-[180px] lg:text-[240px] xl:text-[300px] tracking-widest">
            <span className="text-primary leading-none">FEM</span>
            <span className="text-black leading-none">ALE</span>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center z-10">
            <div className="flex flex-col gap-7 px-2">
              <p className="text-xl text-black sm:text-xl max-w-md text-pretty font-serif">
                <AnimatedTextLines text={futureText1} />
              </p>
              <Link
                to="/forms"
                className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
          />
        </div>
      </section>

      {/* Kids */}

      <section
        id="hero"
        className="relative min-h-screen w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center"
      >
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-center md:text-[180px] lg:text-[240px] xl:text-[300px] tracking-widest">
            <span className="text-primary leading-none">KI</span>
            <span className="text-paper leading-none">DS</span>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center z-10">
            <div className="flex flex-col gap-7 px-2">
              <p className="text-xl text-white sm:text-xl max-w-md text-pretty font-serif">
                <AnimatedTextLines text={futureText1} />
              </p>
              <Link
                to="/forms"
                className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
          />
        </div>
      </section>

      {/* Teen */}
      <section
        id="hero"
        className="relative min-h-screen w-full px-5 sm:px-10 font-magtis font-extrabold bg-white flex items-center justify-center"
      >
        <div className="flex flex-col gap-0">
          <div className="flex items-center justify-center md:text-[180px] lg:text-[240px] xl:text-[300px] tracking-widest">
            <span className="text-primary leading-none">TE</span>
            <span className="text-black leading-none">EN</span>
          </div>
          <div className="flex flex-col gap-5 items-start justify-center z-10">
            <div className="flex flex-col gap-7 px-2">
              <p className="text-xl text-black sm:text-xl max-w-md text-pretty font-serif">
                <AnimatedTextLines text={futureText1} />
              </p>
              <Link
                to="/forms"
                className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
          />
        </div>
      </section>
    </section>
  );
};

export default Models;
