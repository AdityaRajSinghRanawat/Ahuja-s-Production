const Form = () => {
  return (
    <section>
      <section
        id="form"
        className="flex items-center justify-center relative h-[90vh] bg-black"
      >
        <div className="flex items-start justify-center w-full h-full">
          {/* Chat on whatsapp */}
          <div className="flex flex-col h-full w-1/2 justify-between gap-3 px-30 py-20 z-10">
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
              <div>+91 123-456-7890</div>
            </div>

            <a
              href="https://wa.me/91123456789"
              className="bg-primary text-white px-5 py-3 rounded-lg max-w-[150px] text-center font-semibold font-serif cursor-pointer"
              target="_blank"
            >
              Start Chat
            </a>
          </div>
          {/* Location */}
          <div className="flex flex-col justify-start h-full w-1/2 p-30 text-white bg-cover bg-center bg-[url('/images/form-3.jpg')] px-30 py-20 gap-10">
            <div className="text-primary text-7xl">We are Here</div>
            <div className="font-serif">Our door is always open for a good cup of coffee</div>
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
      </section>
    </section>
  );
};

export default Form;
