import React from "react";

const AboutPage = () => {
  const services = [
    {
      title: "Visa Services",
      description:
        "Comprehensive visa assistance for multiple destinations worldwide, ensuring smooth and hassle-free travel documentation.",
    },
    {
      title: "Umrah Services",
      description:
        "Complete Umrah packages with spiritual guidance, accommodation, and transportation arrangements for a blessed journey.",
    },
    {
      title: "GCC Document Services",
      description:
        "Professional assistance with all GCC documentation requirements, including attestation and legal processing.",
    },
    {
      title: "Travel Packages",
      description:
        "Customized travel packages for individuals and groups, covering flights, hotels, and local experiences.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="relative h-[330px] xl:h-[400px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('/images/aboutbanner3.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 ">
          <div className=" mx-auto h-full px-4"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are dedicated to providing exceptional travel and documentation
              services, making international travel accessible and seamless for
              our clients. With years of experience and a commitment to
              excellence, we handle all aspects of your travel needs with utmost
              care and professionalism.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-3xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg text-gray-600">
                  ✓ Expert guidance and personalized service
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg text-gray-600">
                  ✓ Fast and efficient documentation processing
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg text-gray-600">
                  ✓ Competitive rates and transparent pricing
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg text-gray-600">
                  ✓ 24/7 customer support for your convenience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
