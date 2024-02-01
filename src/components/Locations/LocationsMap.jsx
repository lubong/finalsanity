import { useState, useEffect } from "react";
import { client } from "../../client.ts";
import './Locations.css';

function LocationsMap() {
  const [storemap, setStoreMap] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "locationsMap"]`)
      .then((data) => setStoreMap(data))
      .catch(console.error);
  }, []);
  
  
  return(   
  <>  
    {storemap.map((mapx) => (
    <div className='py-2'>
    <h3 className='text-block-text-heading'>{mapx.mapTitle}</h3>
    <div className="ratio ratio-16x9 w-auto mx-3 content-box">
    <iframe title="map"
      src={mapx.mapURL}
      loading="lazy"
    ></iframe>
    </div>
    </div>
    ))}
    </>
);
};

export default LocationsMap;
