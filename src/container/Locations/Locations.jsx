import { LocationsGallery, LocationsTextBlock, LocationsMap } from "../../components";

function Locations() {
  return (
    <div className=" text-center">
      <h1>Update works</h1>
      <LocationsTextBlock />
      <LocationsMap />
      <LocationsGallery />
    </div>
  );
}

export default Locations;
