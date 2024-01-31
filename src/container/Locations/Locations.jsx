import { LocationsGallery, LocationsTextBlock, LocationsMap } from "../../components";

function Locations() {
  return (
    <div className=" text-center">
      <LocationsTextBlock />
      <LocationsMap />
      <LocationsGallery />
    </div>
  );
}

export default Locations;
