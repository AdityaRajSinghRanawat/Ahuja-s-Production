import AnimatedTextLines from "../components/AnimatedTextLines";
import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

const Models = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const textMale =
    "Redefining confidence and class — our male models embody strength, style, and sophistication in every frame.";

  const textFemale =
    "Where elegance meets expression — our female models bring every look to life with poise and charisma.";

  const textKids =
    "Pure charm, endless energy — our young stars light up every campaign with innocence and authenticity.";

  const textTeen =
    "Fresh, bold, and full of attitude — our teen models capture the vibrant spirit of today's generation.";

  return (
    <section id="models">
      {/* Male */}
      <section className="flex justify-center items-center h-[90vh] bg-black">
        <div
          id="male"
          className="relative min-h-[40vh] sm:min-h-[60vh] md:h-[90vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center py-10"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center text-[80px] sm:text-[120px] md:text-[210px] lg:text-[240px] xl:text-[300px] gap-5 tracking-widest">
              <span className="text-primary leading-none">MA</span>
              <span className="text-paper leading-none">LE</span>
            </div>
            <div className="flex flex-col gap-5 items-start justify-center z-10">
              <div className="flex flex-col gap-7 px-2">
                <p className="text-md sm:text-2xl text-white max-w-md text-pretty font-serif">
                  {isMobile ? (
                    "Redefining confidence and class — our male models embody strength, style, and sophistication in every frame."
                  ) : (
                    <AnimatedTextLines text={textMale} />
                  )}
                </p>
                <Link
                  to="/form"
                  className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0">
            <img
              src="/images/models-male.webp"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
            />
          </div>
        </div>
      </section>

      {/* Female */}
      <section className="flex justify-center items-center h-[100vh] bg-paper">
        <div
          id="female"
          className="relative min-h-[40vh] sm:h-[60vh] md:h-[100vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-paper flex items-center justify-center py-10"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center text-[60px] sm:text-[120px] md:text-[150px] lg:text-[200px] xl:text-[250px] gap-5 tracking-widest">
              <span className="text-primary leading-none">FEM</span>
              <span className="text-black leading-none">ALE</span>
            </div>
            <div className="flex flex-col gap-5 items-start justify-center z-10">
              <div className="flex flex-col gap-7 px-2">
                <p className="text-md sm:text-2xl text-black max-w-md text-pretty font-serif">
                  {isMobile ? (
                    "Where elegance meets expression — our female models bring every look to life with poise and charisma."
                  ) : (
                    <AnimatedTextLines text={textFemale} />
                  )}
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
          <div className="absolute inset-0">
            <img
              src="/images/models-female.webp"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
            />
          </div>
        </div>
      </section>

      {/* Kids */}
      <section className="flex justify-center items-center h-[100vh] bg-black">
        <div
          id="kids"
          className="relative min-h-[40vh] sm:min-h-[60vh] md:min-h-[100vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-black flex items-center justify-center py-10"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center text-[100px] sm:text-[120px] md:text-[210px] lg:text-[240px] xl:text-[300px] gap-5 tracking-widest">
              <span className="text-primary leading-none">KI</span>
              <span className="text-paper leading-none">DS</span>
            </div>
            <div className="flex flex-col gap-5 items-start justify-center z-10">
              <div className="flex flex-col gap-7 px-2">
                <p className="text-md sm:text-2xl text-white max-w-md text-pretty font-serif">
                  {isMobile ? (
                    "Pure charm, endless energy — our young stars light up every campaign with innocence and authenticity."
                  ) : (
                    <AnimatedTextLines text={textKids} />
                  )}
                </p>
                <Link
                  to="/form"
                  className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0">
            <img
              src="/images/models-kids.png"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
            />
          </div>
        </div>
      </section>

      {/* Teen */}
      <section className="flex justify-center items-center h-[100vh] bg-white">
        <div
          id="teen"
          className="relative min-h-[40vh] sm:h-[60vh] md:h-[100vh] w-full px-5 sm:px-10 font-magtis font-extrabold bg-white flex items-center justify-center py-10"
        >
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center text-[100px] sm:text-[120px] md:text-[210px] lg:text-[240px] xl:text-[300px] gap-5 tracking-widest">
              <span className="text-primary leading-none">TE</span>
              <span className="text-black leading-none">EN</span>
            </div>
            <div className="flex flex-col gap-5 items-start justify-center z-10">
              <div className="flex flex-col gap-7 px-2">
                <p className="text-md sm:text-2xl text-black max-w-md text-pretty font-serif">
                  {isMobile ? (
                    "Elegance meets expression, our teen models bring every look to life with poise and charisma."
                  ) : (
                    <AnimatedTextLines text={textTeen} />
                  )}
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
          <div className="absolute inset-0">
            <img
              src="/images/models-teen.webp"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Models;
