import React from "react";

const partners = [
  { id: 1, src: "lenskart.jpg" },
  { id: 2, src: "lenskart.jpg" },
  { id: 3, src: "lenskart.jpg" },
  { id: 4, src: "lenskart.jpg" },
  { id: 5, src: "lenskart.jpg" },
  { id: 6, src: "lenskart.jpg" },
  { id: 7, src: "lenskart.jpg" },
];

const Partners = () => {
  return (
    <>
      <section className="py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-8 md:p-12 font-bold text-center">
          Our Placement Partners
        </h1>
      </section>
      <section className="py-4">
        <div className="flex justify-center flex-wrap gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.src}
              alt={`Partner ${partner.id}`}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <span className="inline-block h-2 w-2 mx-1 bg-green-700 rounded-full"></span>
          <span className="inline-block h-2 w-2 mx-1 bg-gray-400 rounded-full"></span>
          <span className="inline-block h-2 w-2 mx-1 bg-gray-400 rounded-full"></span>
        </div>
      </section>
      <section className="text-center py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl p-4 sm:p-8 md:p-12 font-bold">
          Testimonals Section
        </h2>
      </section>
    </>
  );
};

export default Partners;
