// import { TemplateTextImageBlock } from "../../template";
import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";
import './Locations.css';

function LocationsTextBlock() {
  const [textOnly, setText] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "locationTextBlock"].TextImageBlock{
        heading,
        tagline,
        body,
        linkUrl,
        linkName,
        "caption" : imageurl.caption,
        "alt" : imageurl.alt,
        "title" : imageurl.title,
        "imagePos" :imageurl.imagePos,
        imageurl,    
        }`
      )
      .then((data) => setText(data))
      .catch(console.error);
  }, []);

  return (<>
    {/* Text Image Block Copy Paste */}
    {textOnly.map((text) => (
      <div className="card text-block border border-0">
        <div className="row g-0">
          <div className={text["imageurl"] ? "col-md-8" : "col-md-12"}>
            <div className="card-body">
              <>
                <h3 className="card-title text-block-text-heading-green">
                  {" "}
                  {text["heading"]}{" "}
                </h3>
                <h6 className="card-subtitle text-block-text-subtitle">
                  {text["tagline"]}
                </h6>
                <p className="card-text text-block-text-body">
                  {" "}
                  {text["body"]}{" "}
                </p>
                {text["linkName"] ? (
                  <a
                    href={text["linkUrl"]}
                    className={
                      text["linkName"] ? "btn btn-success text-block-btn" : ""
                    }
                  >
                    {text["linkName"]}
                  </a>
                ) : (
                  <></>
                )}
              </>
            </div>
          </div>

          {/* Image */}
          {text["imageurl"] ? (
            <div
              className={
                text["imagePos"] === "left"
                  ? "col-md-4 order-first"
                  : "col-md-4"
              }
            >
              <div
                className={
                  text["imageurl"] ? "card text-block-image-card" : "card"
                }
              >
                <img
                  src={text["imageurl"] ? urlFor(text["imageurl"]).url() : ""}
                  className={
                    text["imageurl"] ? "card-img text-block-image-image" : ""
                  }
                  alt={text["alt"]}
                />
                <div
                  className={
                    text["imageurl"] ? "text-block-image-text-overlay" : ""
                  }
                >
                  <h5>{text["title"]}</h5>
                  <p>{text["caption"]}</p>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    ))}
  </>
  );
}

export default LocationsTextBlock;
