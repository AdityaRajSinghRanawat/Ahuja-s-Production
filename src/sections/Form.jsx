const Form = () => {
  return (
    <section>
      <section
        id="form"
        className="flex items-center justify-center relative lg:h-[90vh] min-h-[90vh] bg-black"
      >
        <div className="flex flex-col lg:flex-row items-start justify-center w-full h-full">
          {/* Chat on whatsapp */}
          <div className="flex lg:justify-center items-start h-full w-full lg:w-1/2 px-5 sm:px-10 py-10 lg:py-0">
            <div className="flex flex-col justify-center lg:justify-start gap-5 sm:gap-8 z-10 text-white lg:pt-[100px] h-full">
              <div className="text-primary text-7xl">Let's Talk</div>
              <div className="font-serif text-white">
                We are here to help you. Chat with us on WhatsApp
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34572.13304835027!2d82.68876305675715!3d21.165641809067804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x63e76299966498fd%3A0x589d693bb58e6a14!2sAhuja&#39;s%20Production!5e1!3m2!1sen!2sin!4v1759435972657!5m2!1sen!2sin"
                width="70%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="font-serif text-2xl text-white">
                <div>+91 838-588-6893</div>
              </div>

              <a
                href="https://wa.me/918385886893"
                className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif cursor-pointer"
                target="_blank"
              >
                Start Chat
              </a>
            </div>
          </div>
          
          {/* Location */}
          <div className="relative flex lg:justify-center items-start h-full w-full lg:w-1/2 px-5 sm:px-10 py-10 lg:py-0">
            <img
              src="/images/form-right.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="flex flex-col justify-center lg:justify-start gap-8 z-10 text-white lg:pt-[100px] h-full">
              <div className="text-primary text-7xl">We are Here</div>
              <div className="font-serif">
                Our door is always open for a good cup of coffee
              </div>
              <div className="font-serif">
                <div>Our Office</div>
                <div>
                  <div>Ahuja's Production</div>
                  <div>123, Some Street</div>
                  <div>City, State, ZIP</div>
                  <div>Country</div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/6qccnQnXLLwrGBfX7"
                className="bg-white text-black px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif cursor-pointer"
                target="_blank"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Form;
