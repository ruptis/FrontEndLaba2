
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
    
function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

function MapComponent(props : any) {
  let mapSize =
  {
    width: props.width+'px',
    height: props.height+'px'
  }

  return (
    <MapContainer style={mapSize} center={[props.x, props.y]} zoom={10}>
      <MyComponent />
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default MapComponent;