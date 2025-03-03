import React from "react";

function SaudiSection() {
  return (
    <div className="pb-12 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-semibold text-center mb-12 ">
          SAUDI DOCUMENT SERVICES
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Image Section */}
          <div>
            <img
              src="/images/saudi.jpg"
              alt="Beautiful Landscape"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right Content Section */}
          <div className=" justify-center flex flex-col">
            {[
              {
                number: "01",
                title: "Exit Print / Javazath Print",
                description: "Services for exit and javazath printing.",
              },
              {
                number: "02",
                title: "Airport Ban Print (Muqeem Print)",
                description:
                  "Assistance with airport ban-related printing and Muqeem services.",
              },
              {
                number: "03",
                title: "Uroob Print",
                description: "Handling of Uroob document printing needs.",
              },
              {
                number: "04",
                title: "Nakal Mahloomath",
                description: "Support for Nakal Mahloomath documentation.",
              },
              {
                number: "05",
                title: "Phone Print",
                description: "Facilitating phone-related printing services.",
              },
              {
                number: "06",
                title: "Employment Visa Stamping",
                description: "Expertise in employment visa stamping services.",
              },
              {
                number: "07",
                title: "PCC (Police Clearance Certificate)",
                description:
                  "Processing of Police Clearance Certificates (PCC).",
              },
            ].map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-md lg:text-lg font-medium flex items-center gap-2">
                  <span className="text-[#6D6D6D] text-lg lg:text-xl font-bold">
                    {item.number}
                  </span>
                  {item.title}
                </h3>
                {/* <p className="text-gray-600 mt-2">{item.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaudiSection;
