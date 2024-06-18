function TestimonialCard({testimonial}) {
    return (
        <div className="w-72 h-48 ">

      <div className="flex mb-5 ">
        <img src="profile.png" className="h-12 mr-10" alt="" />
        <p className="text-xl my-auto font-bold px-2">{testimonial.name}</p>
      </div>
      <div className="">
        {testimonial.quote}
       </div>
        </div>

    );
  }
  
  export default TestimonialCard;