import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";
import './Locations.css';

function LocationsGallery() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "locationsImageGallery"].ImageGallery`)
      .then((data) => setGallery(data))
      .catch(console.error);
  }, []);

  return (<>
    {gallery.map((galleryx) => (
      <section className="container gallery text-center">
        <>
          <h5 className="text-block-text-heading">{galleryx["heading"]}</h5>
          <h6 className="text-block-text-subtitle">{galleryx["tagline"]}</h6>
          <p className="text-block-text-body">{galleryx["body"]}</p>

          <div className="row gallery-images row-cols-2 row-cols-md-4">
            {galleryx["ImageGallery"].map((image) => (
              <div className="col">
                <a
                  href={image["linkURL"]}
                  target="_blank" rel="noreferrer"
                  className="card gallery-image-card border border-0 "
                >
                  <img
                    src={
                      image ? urlFor(image).width(400).height(300).url() : ""
                    }
                    className="card-img gallery-image-image"
                    alt={image["alt"]}
                  />
                  <div className="card-img-overlay gallery-image-text">
                    <h5 className="card-title gallery-image-text-caption">
                      {image["title"]}
                    </h5>
                    <h6 className="card-subtitle gallery-image-text-title">
                      {image["caption"]}
                    </h6>
                    <p className="card-text gallery-image-text-body">
                      {image["desc"]}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </>
      </section>
    ))}
  </>
  );
}

export default LocationsGallery;
