import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";
import './Home.css';

function HomeBanner() {
  const [imageurl, setImageUrl] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "homeBanner"].imageurl`)
      .then((data) => setImageUrl(data))
      .catch(console.error);
  }, []);

  return (
    <div
      id="carouselExampleFade"
      className=" carousel slide carousel-fade"
      data-bs-ride="ride"
    >
      <div className="carousel-inner">
        {imageurl.map((image, index) => (
          <div
            className={`carousel-item + ${index === 0 ? "active" : ""}`}
            data-bs-interval="5000"
            key={image["alt"] + index}
          >
            <div className="card">
              <div className="row">
                <div className="col-md-8 p-0">
                  <img
                    src={
                      image ? urlFor(image).width(1200).height(500).url() : ""
                    }
                    alt={image["alt"]}
                    className="d-block img-fluid"
                  />
                </div>
                <div className="col-md-4 text-bg-dark text-start">
                  <div className="card-body px-2 pb-5">
                    <h2 className="card-title py-3">{image["title"]}</h2>
                    <p className="card-text ">{image["caption"]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeBanner;
