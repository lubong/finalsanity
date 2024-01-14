import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";
import './About.css';

function AboutTestimonials() {
  const [testimonials, setTestimonial] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "aboutTestimonials"]`)
      .then((data) => setTestimonial(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {testimonials.map((text) => (
        <section className="py-4">
          <h5 className="text-block-text-heading">{text["heading"]}</h5>
          <h6 className="text-block-text-subtitle">{text["tagline"]}</h6>
          <p className="text-block-text-body">{text["body"]}</p>
          <div className="container">
            <div className="row gallery-images g-2">
              {text["testimonials"].map((testimonial) => (
                <div className="col-lg-4">
                  <div className="card p-3 text-center px-4 border border-0">
                    <div className="ratio ratio-1x1 w-50 mx-auto">
                      <img
                        src={testimonial ? urlFor(testimonial).url() : ""}
                        className="rounded-circle"
                        alt={testimonial["alt"]}
                      />
                    </div>
                    <div className="pt-3">
                      <h5 className="mb-0">{testimonial["name"]}</h5>
                      <small>{testimonial["caption"]}</small>
                      <p>{testimonial["testimonialBody"]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default AboutTestimonials;
