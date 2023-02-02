import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import { Result } from 'postcss';
import { getCenter } from 'geolib';

const MapBox = ({ searchResults }) => {
	// Transform searchResult to {latitude: 43.43434, longtitude: 13.43434}
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults.map((item) => ({
		longitude: item.long,
		latitude: item.lat,
	}));

	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 8,
	});

	return (
		<ReactMapGL
			mapboxApiAccessToken={process.env.mapbox_key}
			mapStyle="mapbox://styles/daniss1moj/cldnikn4v000801phjlt6kspj"
			{...viewport}
			onViewportChange={(viewport) => setViewport(viewport)}>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						anchor="center"
						offsetLeft={-20}
						offsetTop={-10}>
						<p
							role="img"
							aria-label="push-pin"
							onClick={() => setSelectedLocation(result)}
							className="cursor-pointer text-2xl animate-pulse">
							📌
						</p>
					</Marker>
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
};

export default MapBox;
