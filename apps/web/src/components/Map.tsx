"use client";

import { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';



interface MapProps {
    current_lat: number;
    current_lng: number;
}



export default function Map({ current_lat, current_lng }: MapProps) {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const map = useRef<maptilersdk.Map | null>(null);
    const location = { lng: current_lng, lat: current_lat };
    const zoom = 15;

    maptilersdk.config.apiKey = import.meta.env.VITE_MAP_API_KEY


    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [location.lng, location.lat],
            zoom: zoom,
        });



        new maptilersdk.Marker({ color: '#FF0000' })
            .setLngLat([location.lng, location.lat])
            .setPopup(new maptilersdk.Popup().setText("Venue"))
            .addTo(map.current);


    }, [location.lat, location.lng]);



    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}


