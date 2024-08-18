import React from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapSection = () => {
  const mapContainerRef = React.useRef<A>();
  const mapRef = React.useRef<A>();
  React.useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [105.828284, 21.000239],
      zoom: 15,
      attributionControl: false,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    });

    const imgMarker = document.createElement('img');
    imgMarker.src = '/location.svg';
    imgMarker.style.width = '50px';
    imgMarker.style.height = '50px';

    new mapboxgl.Marker({ element: imgMarker }).setLngLat([105.828284, 21.000239]).addTo(mapRef.current);
    imgMarker.addEventListener('click', () => {
      window.open('https://www.google.com/maps?q=21.000239,105.828284', '_blank');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className='h-[404px] w-1/2 overflow-hidden' id='map' ref={mapContainerRef} />;
};
