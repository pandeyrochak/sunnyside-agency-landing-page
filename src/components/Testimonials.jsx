import React from "react";

const TestimonialCard = (props) => {
  const { imageUrl, name, role, description } = props;
  return (
    <div className="col-span-3 px-5 md:col-span-1 md:px-14">
      <div className="flex flex-col content-center text-center">
        <img
          src={`${process.env.PUBLIC_URL}${imageUrl}`}
          alt={name}
          className="mx-auto h-16 w-16 rounded-full"
        />
        <p className="my-8 text-neutral-grayish-blue-300">{description}</p>
        <h3 className="font-serif font-extrabold">{name}</h3>
        <p className="text-xs text-neutral-grayish-blue-200">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = (props) => {
  const { testimonialsList } = props;
  return (
    <div className="container w-full py-10 md:py-24">
      <h3 className="mb-10 text-center font-serif font-bold uppercase text-neutral-grayish-blue-100">
        client testimonials
      </h3>
      <div className="grid grid-cols-3">
        {testimonialsList.map((testimonial) => (
          <TestimonialCard {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
