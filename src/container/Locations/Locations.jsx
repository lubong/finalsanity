import { LocationsGallery, LocationsTextBlock } from "../../components";

function Locations() {
  return (
    <div className=" text-center">
      <LocationsTextBlock />
      <div className="ratio ratio-16x9 w-75 mx-auto my-5 content-box">
        <iframe title="map"
          src="https://www.google.com/maps/d/embed?mid=1mD5ysLpAiA2w_9wL4s_svLRGUnihERI&ehbc=2E312F"
          loading="lazy"
        ></iframe>
      </div>
      <LocationsGallery />
    </div>
  );
}

export default Locations;
