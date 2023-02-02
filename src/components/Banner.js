import Image from 'next/image';
const Banner = () => {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
			<Image
				src="https://links.papareact.com/0fm"
				fill
				alt="promo"
				style={{
					objectFit: 'cover',
				}}
			/>
			<div className="absolute top-[50%] left-[50%] translate-x-[-50%] text-center space-y-3">
				<p>Not sure where to go? Perfect.</p>
				<button className="text-purple-500 bg-white px-10 py-6 shadow-md rounded-full hover:shadow-xl active:scale-90 transition ">
					I`m flexible
				</button>
			</div>
		</div>
	);
};

export default Banner;
