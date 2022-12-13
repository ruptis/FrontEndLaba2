import { MapContainer, TileLayer } from 'react-leaflet'
import {Rectangle} from "../Rectangle";
import { MapContainer, TileLayer } from 'react-leaflet'

interface MapComponentProps {
    lat: number;
    lng: number;
}

function MapComponent(props : MapComponentProps) {
  let mapSize =
  {
      width: '100%',
      height: '100%',
      borderRadius: '30px',
  }
  return (
      <Rectangle blur={false} width={'1300px'} height={'860px'} padding={'35px'} margin={'50px'} minHeight={'500px'} color={'neutral.contrastText'}>
        <MapContainer style={mapSize} center={[props.lat, props.lng]} zoom={13}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Rectangle>
  )
}

export default MapComponent;