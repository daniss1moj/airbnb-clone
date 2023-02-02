const Footer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-32 py-14 text-center md:text-left bg-gray-100 text-gray-600">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnbn works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Aribnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>Its a pretty awesome clone</p>
				<p>Referals accepted</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help Centre</p>
				<p>Trust & Safety</p>
			</div>
		</div>
	);
};

export default Footer;
