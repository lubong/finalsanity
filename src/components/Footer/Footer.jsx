import "./Footer.css";

import { useState, useEffect } from "react";
import { client } from "../../client.ts";

function Footer() {
    
  const [footerlines, setLine] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "footerLinks"]`)
      .then((data) => setLine(data))
      .catch(console.error);
  }, []);
  
  return (
    <footer className="bg-body-dark-grey text-center text-lg-start p-2">
      <div className="container p-4 pb-0">
          <section className="row">
            {footerlines.map((sectionx) => (
            <>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">{sectionx["header"]}</h6>
              {sectionx["lineItems"].map((linex) => (
                <p>
                  <a href={linex["lineURL"] ? linex["lineURL"] : ""} className="text-decoration-none text-white">
                  {linex["title"]}
                  </a>
                </p>
              ))}
            </div>
            <hr className="w-100 clearfix d-md-none" />
            </>
            ))}
          </section>
      </div>
    </footer>
  );
}

export default Footer;
