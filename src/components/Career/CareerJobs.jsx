import { useState, useEffect } from "react";
import { client } from "../../client.ts";

function CareerJobs() {
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "careerJobs"]`)
      .then((data) => setJobs(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {Jobs.map((job) => (
        <>
          <hr></hr>
          <div className="card border border-0">
            <div className="card-body">
              <h5 className="card-title fs-4">{job["jobtitle"]}</h5>
              <h6 className="card-subtitle text-block-text-subtitle">
                {job["jobsubtitle"]}
              </h6>
              <p className="card-text">{job["jobdesc"]} </p>
              <div
                className={
                  job["fulltime"]
                    ? "d-inline py-1 px-2 border rounded-pill border-dark"
                    : "d-inline opacity-0"
                }
              >
                {job["fulltime"] ? "Full-Time" : ""}
              </div>
              <div
                className={
                  job["parttime"]
                    ? "d-inline py-1 px-2 ms-3 border rounded-pill border-dark"
                    : "d-inline opacity-0"
                }
              >
                {job["parttime"] ? "Part-Time" : ""}
              </div>
            </div>
          </div>
        </>
      ))}
      <hr></hr>
    </div>
  );
}

// Varying Modal Content Bootstrap

export default CareerJobs;
