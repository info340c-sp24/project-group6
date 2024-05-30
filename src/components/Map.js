import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function Map() {
  const position = [47.65873, -122.30631];

  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Your location
        </Popup>
      </Marker>
    </MapContainer>
  );
}