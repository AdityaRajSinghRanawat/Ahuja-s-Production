const About = () => {
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
          <img src="/images/about-hero.png" alt="" className="absolute left-1/2 -translate-x-1/2 object-cover object-center h-full"/>
        </div>
      </section>
      <section className=" relative bg-paper min-h-screen px-5 sm:px-10">

      </section>
    </section>
  );
};

export default About;
