/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['links.papareact.com'],
	},
	env: {
		mapbox_key:
			'pk.eyJ1IjoiZGFuaXNzMW1vaiIsImEiOiJjbGRuaWE2a2UwM21sM25vNnM2dWFwN2txIn0.taDdJDnxoIv7fuaV4xMxIA',
	},
};

module.exports = nextConfig;
