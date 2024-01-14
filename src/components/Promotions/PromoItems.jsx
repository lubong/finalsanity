import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";

function PromoItems() {
  const [promosets, setPromoSet] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "promoItems"].ImageGallery`)
      .then((data) => setPromoSet(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {promosets.map((promoset) => (
        <div className="container gallery text-center">
          <h4 className="text-block-text-heading">{promoset["heading"]}</h4>
          <h6 className="text-block-text-subtitle">{promoset["tagline"]}</h6>
          <p className="text-block-text-body">{promoset["body"]}</p>

          <hr></hr>

          <div className="row gallery-images row-cols-2 row-cols-md-5 g-4">
            {promoset["ImageGallery"].map((item) => (
              <div className="col">
                <div className="card h-100 border border-0">
                  <img
                    src={item ? urlFor(item).width(300).height(300).url() : ""}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body p-0">
                    <h4 className="card-title gallery-image-text-title orange-col">
                      {item["title"] ? item["title"] : ""}
                    </h4>
                    <h5 className="card-subtitle gallery-image-text-caption">
                      {item["caption"] ? item["caption"] : ""}
                    </h5>
                    <p className="card-text gallery-image-text-body mb-0">
                      {item["desc"] ? item["desc"] : ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      ;
    </>
  );
}

export default PromoItems;
