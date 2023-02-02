import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import InfoCard from '@/components/InfoCard';
import MapBox from '@/components/Map';

const Search = ({ searchResults }) => {
	const router = useRouter();

	const { location, startDate, endDate, numOfGuests } = router.query;
	useEffect(() => {
		if (!location) {
			router.push('/');
		}
	}, []);

	if (!location) return null;

	const formattedStartDate = startDate && format(new Date(startDate), 'dd MMMM yy');
	const formattedEndDate = endDate && format(new Date(endDate), 'dd MMMM yy');
	const range =
		(formattedStartDate && formattedEndDate && `${formattedStartDate} - ${formattedEndDate}`) ||
		'Some date';

	return (
		<div>
			<Header />
			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300 + Stays -{range}- for {numOfGuests} people
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

					<div className="hidden lg:inline-flex mb-3 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
					</div>
					<div className="flex flex-col">
						{searchResults.map((searchResult) => {
							return <InfoCard key={searchResult.img} {...searchResult} />;
						})}
					</div>
				</section>
				<section className="hidden xl:inline-flex xl:min-w-[600px]">
					<MapBox searchResults={searchResults} />
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Search;

export async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS');
	const data = await searchResults.json();
	return {
		props: {
			searchResults: data,
		},
	};
}
