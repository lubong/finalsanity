import { useState, useEffect } from "react";
import { urlFor, client } from "../../client.ts";

function NewsPosts() {
  const [NewsPosts, setPost] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "newsPosts"].TextImageBlock{
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
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {NewsPosts.map((post) => (
        <div className="card border border-0 text-block">
          <div className="row g-0">
            <div className={post["imageurl"] ? "col-md-8" : "col-md-12"}>
              <div className="card-body">
                <>
                  <h3 className="card-title text-block-text-heading">
                    {" "}
                    {post["heading"]}{" "}
                  </h3>
                  <h6 className="card-subtitle text-block-text-subtitle">
                    {post["tagline"]}
                  </h6>
                  <p className="card-text text-block-text-body">
                    {" "}
                    {post["body"]}{" "}
                  </p>
                  {post["linkName"] ? (
                    <a
                      href={post["linkUrl"]}
                      className={
                        post["linkName"] ? "btn btn-success text-block-btn" : ""
                      }
                    >
                      {post["linkName"]}
                    </a>
                  ) : (
                    <></>
                  )}
                </>
              </div>
            </div>

            {/* Image */}
            <div
              className={
                post["imagePos"] === "left" ? "col-md-4 order-first" : "col-md-4"
              }
            >
              <div
                className={
                  post["imageurl"] ? "card text-block-image-card" : "card"
                }
              >
                <img
                  src={post["imageurl"] ? urlFor(post["imageurl"]).url() : ""}
                  className={
                    post["imageurl"] ? "card-img text-block-image-image" : ""
                  }
                  alt={post["alt"]}
                />
                {post["title"] || post["caption"] ? (
                  <div
                    className={
                      post["imageurl"] ? "text-block-image-text-overlay" : ""
                    }
                  >
                    <h5>{post["title"]}</h5>
                    <p>{post["caption"]}</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

// Varying Modal Content Bootstrap

export default NewsPosts;
