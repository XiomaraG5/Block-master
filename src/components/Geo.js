
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

export default function Geo() {
    const position = [51.505, -0.09]
    console.log("whaaaaat");

    return (
   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup.   <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    
  )
}