import { Ubi } from '@/lib/types';
import { Marker, Popup } from 'react-leaflet';
import { VenueLocationIcon } from './VenueLocations';



// Function to generate markers based on ubis data
export const generateMarkers = (ubis: Ubi[]) => {
  return ubis.map((ubi) => (
    <>
      <Marker key={ubi.id} position={[ubi.latitud, ubi.longitud]} icon={VenueLocationIcon}>
        <Popup>{ubi.Descripcion}</Popup>
      </Marker>
    </>
  ));
};
