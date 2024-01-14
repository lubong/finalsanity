import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";
import './Home.css';

function HomeCardImages() {
  const [textOnly, setText] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "homeCardImages"][heading != null]`)
      .then((data) => setText(data))
      .catch(console.error);
  }, []);

  const [imageurl, setImage] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "homeCardImages"][imageurl != null].imageurl`)
      .then((data) => setImage(data))
      .catch(console.error);
  }, []);

  return (
    <section className="my-4 container text-center">
      {textOnly.map((text) => (
        <div className="card-body">
          <h4 className="card-title text-block-text-heading">
            {text["heading"]}
          </h4>
          <h6 className="card-subtitle text-block-text-subtitle">
            {text["tagline"]}
          </h6>
          <p className="card-text text-block-text-subtitle"> {text["desc"]} </p>
        </div>
      ))}
      <div className="row gallery gallery-images">
        {imageurl.map((image) => (
          <div className="col-md-4">
            <a href={image["linkUrl"]} className="card gallery-image-card border border-0">
              <img
                src={image ? urlFor(image).width(400).height(300).url() : ""}
                className="card-img gallery-image-image"
                alt={image["alt"]}
              />
              <div className="card-img-overlay gallery-image-text">
                <h5 className="card-title gallery-image-text-title">
                  <small>{image["title"]}</small>
                </h5>
                <h5 className="card-subtitle gallery-image-text-caption">
                  {image["caption"]}
                </h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeCardImages;
